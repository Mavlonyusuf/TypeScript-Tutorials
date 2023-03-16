export class ID {
  static id: number = 1;

  static getNewID(): number {
    return this.id++;
  }
}
