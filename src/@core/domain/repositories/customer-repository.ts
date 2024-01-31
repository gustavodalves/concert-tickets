import { Repository } from "../../common/domain/repository";
import { Customer } from "../models/customer/customer";

export interface CustomerRepository extends Repository<Customer> {}