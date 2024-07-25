import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  let prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// @ts-ignore
export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// @ts-ignore
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
