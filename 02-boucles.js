// Chapitre 02 — Boucles
// Notions : for, while, accumulation, comptage, construction de tableau
// Exos 1 à 6 obligatoires — Exos 7 à 9 facultatifs

/**
 * Affiche les nombres de 1 à n dans la console.
 * @param {number} n
 * @example compterJusqua(5) → affiche 1, 2, 3, 4, 5
 */
/*DÉBUT 
Fonction compterJusqua(n)
    POUR i allant de 1 À n FAIRE
        AFFICHER i
    FIN POUR
FIN*/

export const compterJusqua = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}


/**
 * Affiche uniquement les nombres pairs de 1 à n dans la console.
 * Même pattern que compterJusqua, avec une condition en plus.
 * @param {number} n
 * @example afficherPairs(8) → affiche 2, 4, 6, 8
 */
/*DÉBUT 
Fonction afficherPairs(n)
    POUR i allant de 1 À n FAIRE
        SI i est pair ALORS
            AFFICHER i
        FIN SI
    FIN POUR
FIN*/

export const afficherPairs = (n) => {
 for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  } 
}

/**
 * Retourne la somme de tous les entiers de 1 à n.
 * Pattern : boucle + accumulateur numérique.
 * @param {number} n
 * @returns {number}
 * @example somme(5) → 15  (1+2+3+4+5)
 */
/*DÉBUT 
Fonction somme(n)
    INITIALISER total à 0
    POUR i allant de 1 À n FAIRE
        total prend la valeur total + i
    FIN POUR
    RETOURNER total
FIN*/

export const somme = (n) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

/**
 * Retourne le produit de tous les entiers de 1 à n (factorielle).
 * Même pattern que somme, avec une multiplication au lieu d'une addition.
 * @param {number} n
 * @returns {number}
 * @example produit(5) → 120  (1×2×3×4×5)
 * @example produit(0) → 1
 */
/*DÉBUT 
Fonction produit(n)
    INITIALISER resultat à 1
    POUR i allant de 1 À n FAIRE
        resultat prend la valeur resultat * i
    FIN POUR
    RETOURNER resultat
FIN*/

export const produit = (n) => {
  let resultat = 1
  for (let i = 1; i <= n; i++) {
    resultat *= i
  }
  return resultat
}

/**
 * Retourne le nombre d'entiers pairs entre 1 et n inclus.
 * Même pattern que somme, mais on compte au lieu d'additionner.
 * @param {number} n
 * @returns {number}
 * @example compterPairs(10) → 5
 * @example compterPairs(7)  → 3
 */
/*DÉBUT 
Fonction compterPairs(n)
    INITIALISER count à 0
    POUR i allant de 1 À n FAIRE
        SI i est pair ALORS
            count prend la valeur count + 1
        FIN SI
    FIN POUR
    RETOURNER count
FIN*/

export const compterPairs = (n) => {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++
    }
  }
  return count
}

/**
 * Retourne un tableau contenant les n premiers multiples de n.
 * Pattern : boucle + construction de tableau.
 * @param {number} n
 * @returns {number[]}
 * @example table(3) → [3, 6, 9]
 * @example table(0) → []
 */
/*DÉBUT 
Fonction table(n)
    INITIALISER result comme un tableau vide
    POUR i allant de 1 À n FAIRE
        ajouter (n * i) dans result
    FIN POUR
    RETOURNER result
FIN*/

export const table = (n) => {
  const result = []
  for (let i = 1; i <= n; i++) {
    result.push(n * i)
  }
  return result
}

/**
 * Retourne un tableau contenant tous les multiples de n inférieurs ou égaux à limite.
 * Même pattern que table, avec une limite différente.
 * @param {number} n
 * @param {number} limite
 * @returns {number[]}
 * @example multiplesJusqua(3, 12) → [3, 6, 9, 12]
 * @example multiplesJusqua(7, 20) → [7, 14]
 */
/*DÉBUT 
Fonction multiplesJusqua(n, limite)
    INITIALISER result comme un tableau vide
    POUR i allant de n À limite avec un pas de n FAIRE
        ajouter i dans result
    FIN POUR
    RETOURNER result
FIN*/

export const multiplesJusqua = (n, limite) => {
  const result = []
  for (let i = n; i <= limite; i += n) {
    result.push(i)
  }
  return result
}

/**
 * [FACULTATIF]
 * Retourne base élevé à la puissance exposant. Sans Math.pow().
 * Même pattern que produit, sur un nombre fixe d'itérations.
 * @param {number} base
 * @param {number} exposant
 * @returns {number}
 * @example puissance(2, 10) → 1024
 * @example puissance(5, 0)  → 1
 */
export const puissance = (base, exposant) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Retourne true si n est divisible par tous les nombres du tableau diviseurs.
 * Pattern : boucle + condition de sortie anticipée.
 * @param {number} n
 * @param {number[]} diviseurs
 * @returns {boolean}
 * @example estDivisibleParTous(12, [2, 3, 4]) → true
 * @example estDivisibleParTous(10, [2, 3])    → false
 */
export const estDivisibleParTous = (n, diviseurs) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Retourne un tableau contenant les n premiers nombres de Fibonacci.
 * La suite commence par [0, 1] et chaque nombre est la somme des deux précédents.
 * Pattern : boucle + construction de tableau à partir des éléments précédents.
 * @param {number} n
 * @returns {number[]}
 * @example fibonacci(6) → [0, 1, 1, 2, 3, 5]
 * @example fibonacci(1) → [0]
 */
export const fibonacci = (n) => {
  // à compléter
}
