import bcrypt from 'bcrypt'
import { UserRepository } from '../repository/userRepository.js';

const saltRounds = 12; // Typically a value between 10 and 12
const repository = UserRepository

export class UserService{
    static async saveUser(req, res) {
        const {username, password} = req.body
        const hash = await bcrypt.hash(password, saltRounds)
        const user = await repository.saveUser({ username: username, hash: hash })

        return user == null
            ? res.status(403).send({ err: "user wasn't created" })
            : res.status(200).send(user);
    }

    static async findUser(req, res) {
        const { username, password } = req.body;
        const user = await repository.findUser({username: username, password: password})
        return user == null?
            res.status(400).send({"error": "you are not authorized"}):
            res.status(200).send(user)
    }
}