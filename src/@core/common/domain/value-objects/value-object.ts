export abstract class ValueObject<T> {
  constructor(
    protected readonly value: T
  ) {}

  getValue() {
    return this.value
  }
}
