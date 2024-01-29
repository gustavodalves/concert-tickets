import { AggregateRoot } from "../../../common/domain/aggregate-root";
import { UUID } from "../../../common/domain/value-objects/uuid";
import { EventSection, EventSectionId } from "./event-section";
import { EventSpotId } from "./event-spot";

class EventID extends UUID {}

export type CreateNewEventCommand = {
    name: string,
    description: string,
    date: Date,
    totalSpots: number
}

export class Event extends AggregateRoot {
    constructor(
        readonly id: EventID,
        private name: string,
        private description: string | null,
        private date: Date,
        private totalSpots: number,
        private sections: EventSection[]
    ) {
        super()
    }

    static create(
        command: CreateNewEventCommand
    ) {
        return new Event(
            new EventID(),
            command.name,
            command.description,
            command.date,
            command.totalSpots,
            []
        )
    }

    markSpotAsReserved(command: {
        sectionId: EventSectionId,
        spotId: EventSpotId
    }) {
        const section = this.sections.find((section) => section.id.getValue() === command.sectionId.getValue());

        if (!section) {
          throw new Error('Section not found');
        }
    
        section.markSpotAsReserved(command.spotId);
    }
}
