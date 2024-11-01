import { IBiere } from '@src/models/Biere';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(id: string): Promise<IBiere | null> {
  const db = await orm.openDb();
  for (const biere of db.bieres) {
    if (biere.id === id) {
      return biere;
    }
  }
  return null;
}

/**
 * See if a beer with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const biere of db.bieres) {
    if (biere.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all beers.
 */
async function getAll(): Promise<IBiere[]> {
  const db = await orm.openDb();
  return db.bieres;
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
} as const;
