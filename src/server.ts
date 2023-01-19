 import Fastify from "fastify";
 import cors from "@fastify/cors";
 import { PrismaClient } from '@prisma/client';

 const app = Fastify()
 const prisma = new PrismaClient()

 app.register(cors, {
   origin: ["http://127.0.0.1:5173/"]
 })

 app.get('/', async () => {
   const habits = prisma.habit.findMany()
    return habits
 })

 app.listen({
    port: 3333,
 }).then(() => {
    console.log("HTTP Server running")
 })