import { UUID } from "./value-objects/uuid";

export abstract class Entity {
  protected readonly id: UUID
}
