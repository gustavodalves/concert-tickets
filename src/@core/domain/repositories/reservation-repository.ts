import { Repository } from "../../common/domain/repository";
import { SpotReservation } from "../models/reservation/spot-reservation";

export interface SpotReservationRepository extends Repository<SpotReservation> {}
