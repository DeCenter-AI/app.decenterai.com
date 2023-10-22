import { userType } from "@/lib/global_types";
import prisma from "@/lib/prisma";
export async function POST(req: Request){
    const {email} = await req.json();
    const exists = await prisma.user.findFirst({
        where:{
            email: email
        }
    })
    if(exists){
        return new Response(JSON.stringify({exists: true}))
    }
    else{
        return new Response(JSON.stringify({exists: false}))
    }
}