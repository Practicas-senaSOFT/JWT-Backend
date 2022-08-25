import { Router } from 'express';
import { isAuth } from '../middlewares/auth';
//controllers
import { authLogin } from '../controllers/auth.controller';

//Construimos la ruta
const router: Router = Router();

router.route('/login')
    .post(authLogin);

export default router;