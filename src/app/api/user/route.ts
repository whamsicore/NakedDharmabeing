import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

export async function GET(req: NextApiRequest) {
  
  const data = { message: `Fetching user with ID: ${1234}` };
  return Response.json(data);

  // try {
  //   // const prisma = new PrismaClient();
  //   // const users = await prisma.user.findMany();
  //   // res.status(200).json({"test":"asdf"});
  //   res.json({"test":"asdf"});
  // } catch (error) {
  //   res.json({"test":"asdf"});
  //   console.error("Failed to fetch users:", error);
  //   // res.status(500).json({ error: "Failed to fetch users" });
  // }
}
