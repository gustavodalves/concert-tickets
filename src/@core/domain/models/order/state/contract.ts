import { OrderStatus } from "../order"

export interface OrderState {
    status: OrderStatus
    pay(): void
    cancel(): void
}
