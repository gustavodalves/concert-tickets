import { AggregateRoot } from '../../../common/domain/aggregate-root';
import { CustomerId } from '../customer/customer';
import { EventSpotId } from '../events/event-spot';

export type SpotReservationCreateCommand = {
    spotId: EventSpotId;
    customerId: CustomerId;
};

export class SpotReservation extends AggregateRoot {
    protected id: EventSpotId
    constructor(
        private spotId: EventSpotId,
        private reservationDate: Date,
        private customerId: CustomerId
    ) {
        super()
        this.id = spotId
    }

	static create(command: SpotReservationCreateCommand) {
		const reservation = new SpotReservation(
			command.spotId,
			new Date(),
			command.customerId,
		);
		return reservation;
	}

	getId() {
		return this.id
	}

	getSpotId() {
		return this.spotId
	}

	getReservationDate() {
		return this.reservationDate
	}

	getCustomerId() {
		return this.customerId
	}
}
