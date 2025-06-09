import { validateUser } from "../schemas/userSchema.js";

export const userValidationMiddleware = (req, res, next) => {
    const body = validateUser(req.body);
    if (!body.success) return res.status(400).send({ err: "the req.body wasn't typed correctly" });

    next()
}