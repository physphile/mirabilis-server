import ApiError from "../models/ApiError.js";
export const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError)
        res.status(err.status).send("error");
    else
        res.status(520).send("Unknown error");
};
//# sourceMappingURL=errorHandler.js.map