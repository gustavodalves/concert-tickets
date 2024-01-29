import { Entity } from "../../../common/domain/entity";
import { UUID } from "../../../common/domain/value-objects/uuid";

export type CreateEventSpotCommand = {
    location: string,
    isReserved: boolean
}

export class EventSpotId extends UUID {}

export class EventSpot extends Entity {
    constructor(
        readonly id: EventSpotId,
        private location: string | null,
        private isReserverd: boolean,
    ) {
        super()
    }

    static create() {
        return new EventSpot(
            new EventSpotId(),
            null,
            false,
        )
    }

    getLocation() {
        return this.location;
    }

    getIsReserved() {
        return this.isReserverd;
    }

    unReserved() {
        this.isReserverd = false;
    }

    markReserved() {
        this.isReserverd = true;
    }
}
