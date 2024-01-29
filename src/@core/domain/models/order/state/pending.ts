import { Order, OrderStatus } from "../order";
import { CancelledState } from "./cancelled";
import { OrderState } from "./contract";
import { PaidState } from "./paid";

export class PendingState implements OrderState {
    status: OrderStatus = OrderStatus.Pending;

    constructor(
        private readonly order: Order
    ) {}

    cancel(): void {
        this.order.setState(
            new CancelledState()
        )
    }

    pay(): void {
        this.order.setState(
            new PaidState()
        )
    }
}
