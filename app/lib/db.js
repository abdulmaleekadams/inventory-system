import { PrismaClient } from "@prisma/client";

// if there is an existing prisma client
const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
export default db;
