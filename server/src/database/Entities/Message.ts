export class Message {
  public id?: string;
  public content: string;
  public roomId: string;

  constructor(data: Message) {
    this.id = data.id;
    this.roomId = data.roomId;
    this.content = data.content;
  }
}
