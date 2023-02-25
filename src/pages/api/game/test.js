import { prisma } from "@/scripts/Prisma";
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (!token)

    console.log(token);

    res.status(200).json({})
}