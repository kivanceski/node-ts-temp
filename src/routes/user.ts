import { Router } from 'express';
import userControllers from '@/controllers/user';
import { use } from '@/common/utils';

const router = Router();

router.get('/', use(userControllers.getUsers));

export default router;
