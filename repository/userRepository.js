import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export class UserRepository{

    //API
    static async saveUser({username, hash}){
        if (await this.doesUserExist({username: username})) return null
        const user = await prisma.user.create({
            data:{
                username: username,
                hash: hash
            }
        })
        return user != null? user : null
    }

    static async findUser({username, password}) {
        const user = await prisma.user.findFirst({
            where: {
                username:{
                    equals: username
                }
            }
        })
        if (user == null) return null

        const isMatch = await bcrypt.compare(password, user.hash)

        return isMatch? user : null
    }

    //FUNCIONALITY
    static async doesUserExist({username}){
        return await prisma.user.findFirst({
            where:{
                username: {
                    equals: username
                }
            }
        }) != null? true : false
    }
}