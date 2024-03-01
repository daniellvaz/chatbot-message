export default class RequestError extends Error {
  public status: number;

  constructor(
    message: string,
    status: number = 500,
    name: string = "Server Error"
  ) {
    super(message);

    this.status = status;
    this.name = name;
  }
}
