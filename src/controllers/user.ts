import prisma from '@/client';
import type { RequestHandler } from 'express';

interface userHandler {
  getUsers: RequestHandler;
}

const userHandler: userHandler = {
  async getUsers(req, res, next) {
    const users = await prisma.user.findMany();
    console.log(users);
    return res.status(200).json(users);
  },
};

export default userHandler;
