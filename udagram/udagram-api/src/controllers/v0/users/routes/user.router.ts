import {Router, Request, Response} from 'express';
import {User} from '../models/User';
import {AuthRouter} from './auth.router';
import cors from 'cors'
const router: Router = Router();
router.use('/auth',cors({"origin":"*"}), AuthRouter);
router.get('/');
router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);
  res.send(item);
});

export const UserRouter: Router = router;
