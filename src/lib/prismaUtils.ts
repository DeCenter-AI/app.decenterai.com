import { userType } from "./global_types";
export async function create_user(user: userType){
    //check if user exists then return
    await fetch('/api/prisma/user_exists',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user.email)
    }).then(async(res)=>{
        const user_exists = await res.json()
        if(user_exists.exists){
            return
        }
    })

    await fetch('/api/prisma/add_user',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}