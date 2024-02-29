export class Attendant {
  public id?: string;
  public name: string;
  public email: string;

  constructor(data: Attendant) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
  }
}
