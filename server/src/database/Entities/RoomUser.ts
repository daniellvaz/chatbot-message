export class RoomUser {
  public id?: string;
  public userId: string;
  public roomId: string;

  constructor(data: RoomUser) {
    this.id = data.id;
    this.userId = data.userId;
    this.roomId = data.roomId;
  }
}
