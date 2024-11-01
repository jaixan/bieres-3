import BiereRepo from '@src/repos/BiereRepo';
import { IBiere } from '@src/models/Biere';

// **** Variables **** //

export const BIERE_NOT_FOUND_ERR = 'Bière non trouvée';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IBiere[]> {
  return BiereRepo.getAll();
}

// **** Export default **** //

export default {
  getAll,
} as const;
