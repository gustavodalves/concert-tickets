import { OrderStatus } from "../order";
import { OrderState } from "./contract";

export class CancelledState implements OrderState {
    status: OrderStatus = OrderStatus.Cancelled;

    cancel(): void {
        throw new Error('Order already cancelled')
    }

    pay(): void {
        throw new Error('Cannot pay a cancelled order')
    }
}