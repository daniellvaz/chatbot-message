export class Message {
  public _id?: string;
  public content: string;
  public userId: string;

  constructor(data: Message) {
    this._id = data._id;
    this.userId = data.userId;
    this.content = data.content;
  }
}
