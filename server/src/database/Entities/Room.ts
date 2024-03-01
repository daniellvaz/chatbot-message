import { Message } from "./Message";

export class Room {
  public id?: string;
  public name: string;
  public messages?: Message[];

  constructor(data: Room) {
    this.id = data.id;
    this.name = data.name;
    this.messages = data.messages;
  }
}
