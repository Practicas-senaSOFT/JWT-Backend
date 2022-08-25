import { Router } from 'express';
import { isAuth } from '../middlewares/auth';
import { homePage } from '../controllers/home.controller';

const router:Router = Router();

router.route('/home')
    .get(isAuth, homePage);

export default router;