export class Message {
  public _id?: string;
  public message: string;
  public userId: string;
  public attendantId: string;

  constructor(data: Message) {
    this._id = data._id;
    this.userId = data.userId;
    this.message = data.message;
    this.attendantId = data.attendantId;
  }
}
