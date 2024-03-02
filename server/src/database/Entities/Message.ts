export class Message {
  public id?: string;
  public content: string;
  public roomId: string;
  public userId: string;

  constructor(data: Message) {
    this.id = data.id;
    this.roomId = data.roomId;
    this.userId = data.userId;
    this.content = data.content;
  }
}
