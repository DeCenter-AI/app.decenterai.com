import { userType } from "@/lib/global_types";
import prisma from "@/lib/prisma";

export async function POST(req: Request){
    const user: userType = await req.json();
    const created_user = await prisma.user.create({
        data: user
    });
    return new Response(JSON.stringify({status: 200}))
}
