// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an ' + 
  'object with the appropriate user keys.';


// **** Types **** //

export interface IBiere {
  id: string;
  nom: string;
  producteur: string;
  style: string;
  sousStype: string;
  alcool: string;
  volume: string;
  prix: number;
}

// **** Functions **** //

/**
 * Créer une nouvelle bière.
 */
function new_(
  nom?: string,
  producteur?: string,
  style?: string,
  sousStyle?: string,
  alcool?: string,
  volume?: string,
  prix?:number,
  id?: string, // id last cause usually set by db
): IBiere {
  return {
    id: (id ?? "-1"),
    nom: (nom ?? ''),
    producteur: (producteur ?? ''),
    style: (style ?? ''),
    sousStype: (sousStyle ?? ''),
    alcool: (alcool ?? ''),
    volume: (volume ?? ''),
    prix: (prix ?? 0)
  };
}

/**
 * Retourne une instance de bière à partir de l'objet.
 */
function from(param: object): IBiere {
  // Check is user
  if (!isBiere(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get user instance
  const p = param as IBiere;
  return new_(p.nom, p.producteur, p.style, p.sousStype, p.alcool, p.volume, p.prix, p.id);
}

/**
 * Détermine si le paramètre est une bière.
 */
function isBiere(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'nom' in arg &&
    'producteur' in arg &&
    'style' in arg &&
    'sousStyle' in arg &&
    'alcool' in arg &&
    'volume' in arg &&
    'prix' in arg
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isBiere,
} as const;
