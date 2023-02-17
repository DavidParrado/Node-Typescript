import { Router } from 'express';
import { login } from '../controllers/auth';
import { autenticacion } from '../middlewares/validation-error';

export const router: Router = Router();


router.post('/login', autenticacion() , login );