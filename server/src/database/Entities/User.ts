export class User {
  public id?: string;
  public name: string;
  public email: string;
  public roleId: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.roleId = data.roleId;
  }
}
