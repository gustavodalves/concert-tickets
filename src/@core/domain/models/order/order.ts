import { AggregateRoot } from "../../../common/domain/aggregate-root";
import { UUID } from "../../../common/domain/value-objects/uuid";

import { CustomerId } from "../customer/customer"
import { EventSpotId } from "../events/event-spot";
import { PendingState } from "./state/pending";
import { OrderState } from "./state/contract";
import { CancelledState } from "./state/cancelled";
import { PaidState } from "./state/paid";

export enum OrderStatus {
    Pending = 'Pending',
    Paid = 'Paid',
    Cancelled = 'Cancelled',
}

export type CreateOrderCommand = {
    customerId: CustomerId,
    eventSpotId: EventSpotId,
    amount: number,
}

class StateFactory {
    static generate(status: string, order: Order) {
        if(status === OrderStatus.Pending) return new PendingState(order)
        if(status === OrderStatus.Cancelled) return new CancelledState()
        if(status === OrderStatus.Paid) return new PaidState()
        return new PendingState(order)
    }
}

export class OrderId extends UUID {}

export class Order extends AggregateRoot {
    private state: OrderState;

    constructor(
        readonly id: OrderId,
        readonly customerId: CustomerId,
        readonly eventSpotId: EventSpotId,
        readonly amount: number,
        status: OrderStatus
    ) {
        super()
        this.state = StateFactory.generate(status, this)
    }

    getState() {
        return this.state;
    }

    setState(
        state: OrderState
    ) {
        this.state = state;
    }

    static create(
        command: CreateOrderCommand
    ) {
        return new Order(
            new OrderId(),
            command.customerId,
            command.eventSpotId,
            command.amount,
            OrderStatus.Pending
        )
    }

    pay() {
        this.state.pay()
    }

    cancel() {
        this.state.cancel()
    }

    getStatus() {
        return this.state.status
    }
}
