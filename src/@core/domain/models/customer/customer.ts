import { AggregateRoot } from "../../../common/domain/aggregate-root";
import { UUID } from "../../../common/domain/value-objects/uuid";

export type CreateCustomerConstructorProps = {
    name: string;
};

export class CustomerId extends UUID {}

export class Customer extends AggregateRoot {
    constructor(
        readonly id: CustomerId,
        private name: string
    ) {
        super()
    }

    static createNewCustomer({
        name
    }: CreateCustomerConstructorProps) {
        return new Customer(
            new CustomerId(), name
        )
    }

    changeName(
        name: string
    ) {
        this.name = name
    }

    getName() {
        return this.name
    }
}