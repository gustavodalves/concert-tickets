import { OrderStatus } from "../order";
import { OrderState } from "./contract";

export class PaidState implements OrderState {
    status: OrderStatus = OrderStatus.Paid;

    cancel(): void {
        throw new Error('Cannot cancel a paid order')
    }

    pay(): void {
        throw new Error('Order is already paid')
    }
}
