export class Message {
  public id?: string;
  public content: string;
  public room: string;

  constructor(data: Message) {
    this.id = data.id;
    this.room = data.room;
    this.content = data.content;
  }
}
