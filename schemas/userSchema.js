import { z } from "zod/v4"; 
 
const User = z.object({ 
  username: z.string(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)
});

export function validateUser({user}){
    return User.safeParse(user)
}