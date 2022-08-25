import { Router } from 'express';
import { isAuth } from '../middlewares/auth';
import { profilePage } from '../controllers/profile.controller';

const router:Router = Router();

router.route('/profile')
    .get(isAuth, profilePage);

export default router;