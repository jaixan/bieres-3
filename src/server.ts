/**
 * Setup express server.
 */

import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';
import cors from 'cors';

import 'express-async-errors';

import BaseRouter from '@src/routes/api';
import Paths from '@src/routes/constants/Paths';

import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { RouteError } from '@src/other/classes';


// **** Variables **** //

const app = express();


// **** Setup **** //

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
    logger.err(err, true);

  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

// ** Front-End Content ** //

// Répertoire static pour les images
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Redirige sur l'api de la bière
app.get('/', (_: Request, res: Response) => {
  return res.redirect('/api/bieres');
});


// **** Export default **** //

export default app;
