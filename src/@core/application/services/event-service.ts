import { UnitOfWork } from "../../common/app/uow";
import { Event } from "../../domain/models/events/event";
import { EventRepository } from "../../domain/repositories/events-repository";

export class EventService {
    constructor(
        private readonly eventRepository: EventRepository,
        private readonly uow: UnitOfWork,
    ) {}

    async create(input: {
        name: string;
        description: string;
        date: Date;
      }) {
        const event = Event.create({
            date: input.date,
            description: input.description,
            name: input.name,
        })

        this.eventRepository.add(event)
        await this.uow.commit()

        return event
    }
}
