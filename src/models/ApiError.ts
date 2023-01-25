export default class ApiError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super();
    this.status = status ?? 400;
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiError(message, 400);
  }
}
