import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface UserData {
  name: string
  username: string
  email: string
  [key: string]: any
}

async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: UserData[] = await response.json()
    return data.map(item => ({
      name: item.name,
      username: item.username,
      email: item.email
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

async function main() {
  const users = await fetchUserData()
  if (!users.length) return
  const dbUsers = await prisma.user.createMany({
    data: users,
    skipDuplicates: true
  })
  console.log('Users added')
  console.log(dbUsers)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
