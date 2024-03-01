export class Role {
  public id?: string;
  public name: string;
  public value: string;

  constructor(data: Role) {
    this.id = data.id;
    this.value = data.value;
    this.name = data.name;
  }
}
