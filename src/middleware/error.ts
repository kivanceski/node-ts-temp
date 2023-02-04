import type { Request, Response, NextFunction } from 'express'
export const errorMiddleware = (
  err: APIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || 'Something went wrong!'
  const status = err?.status || 500
  return res.status(status).json({ message })
}

export default class APIError extends Error {
  constructor(public message: string, public status: number = 500) {
    super(message)
  }
}
