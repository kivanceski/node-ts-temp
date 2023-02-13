import prisma from '@/client'
import APIError from '@/middleware/error'
import type { RequestHandler } from 'express'

interface userHandler {
  [key: string]: RequestHandler
}

const userHandler: userHandler = {
  async getUsers(req, res) {
    const users = await prisma.user.findMany()
    console.log(users)
    return res.status(200).json(users)
  },

  async createUser(req, res) {
    const { email, name, username } = req.body
    if (!email || !name) {
      throw new APIError('Missing parameters', 422)
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username
      }
    })
    console.log(user)
    return res.status(201).json({ message: 'Create successful' })
  },

  async updateUser(req, res) {
    const { name } = req.body
    const { userId } = req.params
    await prisma.user.update({
      where: {
        id: +userId
      },
      data: {
        name
      }
    })

    return res.status(200).json({ message: 'Update successful' })
  },

  async deleteUser(req, res) {
    const { userId } = req.params
    await prisma.user.delete({
      where: {
        id: +userId
      }
    })

    return res.status(200).json({ message: 'Delete successful' })
  },

  async bulkCreateUsers(req, res) {
    const { data } = req.body

    await prisma.user.createMany({
      data: data
    })

    return res.status(201).json({ message: 'Created users successfully' })
  }
}

export default userHandler
