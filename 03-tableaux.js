// Chapitre 03 — Tableaux
// Notions : accès par indice, .length, accumulation, filtrage
// Exos 1 à 5 obligatoires — Exos 6 et 7 facultatifs

/**
 * Retourne la plus grande valeur d'un tableau de nombres. Sans Math.max().
 * @param {number[]} tableau
 * @returns {number}
 * @example maximum([3, 7, 2, 9, 1]) → 9
 */
/*DÉBUT 
Fonction maximum(tableau)
    INITIALISER max avec le premier élément du tableau
    POUR i allant de 1 À la taille du tableau - 1 FAIRE
        SI l'élément du tableau à l'indice i est supérieur à max ALORS
            max prend la valeur de cet élément
        FIN SI
    FIN POUR
    RETOURNER max
FIN*/

export const maximum = (tableau) => {
  let max = tableau[0]
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i]
    }
  }
  return max
}

/**
 * Retourne la plus petite valeur d'un tableau de nombres. Sans Math.min().
 * @param {number[]} tableau
 * @returns {number}
 * @example minimum([3, 7, 2, 9, 1]) → 1
 */
/*DÉBUT 
Fonction minimum(tableau)
    INITIALISER min avec le premier élément du tableau
    POUR i allant de 1 À la taille du tableau - 1 FAIRE
        SI l'élément du tableau à l'indice i est inférieur à min ALORS
            min prend la valeur de cet élément
        FIN SI
    FIN POUR
    RETOURNER min
FIN*/

export const minimum = (tableau) => {
  let min = tableau[0]
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
      min = tableau[i]
    }
  }
  return min
}

/**
 * Retourne la moyenne des valeurs. Retourne null si le tableau est vide.
 * @param {number[]} tableau
 * @returns {number|null}
 * @example moyenne([2, 4, 6]) → 4 / moyenne([]) → null
 */
/*DÉBUT 
Fonction moyenne(tableau)
    SI la taille du tableau est égale à 0 ALORS
        RETOURNER NUL
    FIN SI
    INITIALISER somme à 0
    POUR i allant de 0 À la taille du tableau - 1 FAIRE
        somme prend la valeur somme + l'élément à l'indice i
    FIN POUR
    RETOURNER somme divisée par la taille du tableau
FIN*/

export const moyenne = (tableau) => {
  if (tableau.length === 0) {
    return null
  }
  let somme = 0
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i]
  }
  return somme / tableau.length
}

/**
 * Retourne true si la valeur est présente dans le tableau, false sinon.
 * Sans utiliser .includes().
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {boolean}
 * @example contient([1, 2, 3], 2) → true / contient([1, 2, 3], 5) → false
 */
/*DÉBUT 
Fonction contient(tableau, valeur)
    POUR i allant de 0 À la taille du tableau - 1 FAIRE
        SI l'élément à l'indice i est égal à valeur ALORS
            RETOURNER VRAI
        FIN SI
    FIN POUR
    RETOURNER FAUX
FIN*/

export const contient = (tableau, valeur) => {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeur) {
      return true
    }
  }
  return false
}

/**
 * Retourne le nombre de fois que la valeur apparaît dans le tableau.
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {number}
 * @example compter([1, 2, 2, 3, 2], 2) → 3
 */
/*DÉBUT 
Fonction compter(tableau, valeur)
    INITIALISER compteur à 0
    POUR i allant de 0 À la taille du tableau - 1 FAIRE
        SI l'élément à l'indice i est égal à valeur ALORS
            compteur prend la valeur compteur + 1
        FIN SI
    FIN POUR
    RETOURNER compteur
FIN*/

export const compter = (tableau, valeur) => {
  let compteur = 0
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeur) {
      compteur++
    }
  }
  return compteur
}

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau dans l'ordre inverse. Sans utiliser .reverse().
 * Ne modifie pas le tableau original.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example inverser([1, 2, 3]) → [3, 2, 1]
 */
/*DÉBUT Fonction inverser(tableau)
    INITIALISER resultat comme un tableau vide
    POUR i allant de la taille du tableau - 1 JUSQU'À 0 avec un pas de -1 FAIRE
        ajouter l'élément du tableau à l'indice i dans resultat
    FIN POUR
    RETOURNER resultat
FIN*/

export const inverser = (tableau) => {
  const resultat = []
  for (let i = tableau.length - 1; i >= 0; i--) {
    resultat.push(tableau[i])
  }
  return resultat
}

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau sans les doublons, dans l'ordre d'apparition.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example sansDoublons([1, 2, 2, 3, 1]) → [1, 2, 3]
 */
export const sansDoublons = (tableau) => {
  // à compléter
}
