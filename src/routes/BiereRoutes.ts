import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import BiereService from '@src/services/BiereService';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all bieres.
 */
async function getAll(_: IReq, res: IRes) {
  const bieres = await BiereService.getAll();
  return res.status(HttpStatusCodes.OK).json({ bieres });
}

// **** Export default **** //

export default {
  getAll,
} as const;
