import { Repository } from "../../common/domain/repository";
import { Order } from "../models/order/order";

export interface OrderRepository extends Repository<Order> {}
