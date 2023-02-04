import { Router } from 'express'
import userControllers from '@/controllers/user'
import { use } from '@/common/utils'

const router = Router()

router.post('/bulk-create', use(userControllers.bulkCreateUsers))

router.get('/', use(userControllers.getUsers))

router.post('/', use(userControllers.createUser))

router.put('/:userId', use(userControllers.updateUser))

router.delete('/:userId', use(userControllers.deleteUser))

export default router
