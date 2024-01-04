import bcrypt from "bcryptjs";
import prisma from "@/helpers/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, name, password } = body;

  const hasshedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hasshedPassword,
    },
  });

  return NextResponse.json(user);
}
