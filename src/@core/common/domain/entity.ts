import { UUID } from "./value-objects/uuid";

export abstract class Entity {
  protected abstract readonly id: UUID
}
