import { Entity } from "../../../common/domain/entity";
import { UUID } from "../../../common/domain/value-objects/uuid";
import { EventSpot, EventSpotId } from "./event-spot";

export type CreateEventSectionCommand = {
    name: string,
    totalSpots: number,
    price: number,
}

export class EventSectionId extends UUID {}

export class EventSection extends Entity {
    constructor(
        readonly id: EventSectionId,
        private name: string,
        private totalSpots: number,
        private price: number,
        private spots: EventSpot[]
    ) {
        super()
    }

    static create(
        command: CreateEventSectionCommand
    ) {
        return new EventSection(
            new EventSectionId(),
            command.name,
            command.totalSpots,
            command.price,
            Array.from({ length: command.totalSpots }).map(() => EventSpot.create())
        )
    }

    markSpotAsReserved(spotId: EventSpotId) {
        const spot = this.spots.find(spot => spot.id.getValue() === spotId.getValue())

        if(!spot) {
            throw new Error('Spot not found')
        }

        if(spot.getIsReserved()) {
            throw new Error('spot already reserved')
        }

        spot.markReserved()
    } 
}