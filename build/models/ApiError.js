export default class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.type = "ApiError";
        this.status = 400;
        this.status = status !== null && status !== void 0 ? status : 400;
    }
    static badRequest(message) {
        return new ApiError(message, 400);
    }
}
//# sourceMappingURL=ApiError.js.map