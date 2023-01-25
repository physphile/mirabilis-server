var _a;
import express from "express";
import sequelize from "./database/database.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();
app.use(errorHandler);
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.post("/user", (req, res, next) => {
    var _a;
    const { username, password } = (_a = req.body) !== null && _a !== void 0 ? _a : {};
    if (!username)
        next(new Error("kek"));
});
const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
start();
//# sourceMappingURL=main.js.map