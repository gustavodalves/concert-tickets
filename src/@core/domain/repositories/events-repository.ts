import { Repository } from "../../common/domain/repository";
import { Event } from "../models/events/event";

export interface CustomerRepository extends Repository<Event> {}
