import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
import dotenv from 'dotenv';



// **** Run **** //
dotenv.config();

const SERVER_START_MSG = ('Express server started on port: ' + 
  process.env.PORT!.toString());

server.listen(process.env.PORT!, () => logger.info(SERVER_START_MSG));
