import { Router } from 'express';

import Paths from './constants/Paths';
import BiereRoutes from './BiereRoutes';


// **** Variables **** //

const apiRouter = Router();
// ** Add UserRouter ** //

const biereRouter = Router();

// Get all users
biereRouter.get(
  Paths.Biere.Get,
  BiereRoutes.getAll,
);

// Add UserRouter
apiRouter.use(Paths.Biere.Base, biereRouter);


// **** Export default **** //

export default apiRouter;
