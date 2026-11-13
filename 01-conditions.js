// Chapitre 01 — Conditions
// Notions : if/else, opérateurs de comparaison, opérateurs logiques
// Exos 1 à 4 obligatoires — Exo 5 facultatif

/**
 * Retourne true si n est positif ou nul, false sinon.
 * @param {number} n
 * @returns {boolean}
 * @example estPositif(5) → true / estPositif(-3) → false
 */

/*DÉBUT 
Fonction estPositif(n)
    SI n est supérieur ou égal à 0 ALORS
        RETOURNER VRAI
    SINON
        RETOURNER FAUX
    FIN SI
FIN*/

export const estPositif = (n) => {
  if (n >= 0) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Retourne true si n est pair.
 * @param {number} n
 * @returns {boolean}
 * @example estPair(4) → true / estPair(7) → false
  */
/*DÉBUT 
Fonction estPair(n)
    SI le reste de n divisé par 2 est égal à 0 ALORS
        RETOURNER VRAI
    SINON
        RETOURNER FAUX
    FIN SI
FIN */
export const estPair = (n) => {
  if (n %2 ===0){
    return true;
  }
  else {
    return false;
  }
}

/**
 * Retourne le plus grand des deux nombres. Sans Math.max().
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example max(3, 7) → 7
 */

/*DÉBUT 
Fonction max(a, b)
    SI a est supérieur à b ALORS
        RETOURNER a
    SINON
        RETOURNER b
    FIN SI
FIN */
export const max = (a, b) => {
  if (a > b) {
    return a;
  }
  else {
    return b;  
  }
}

/**
 * Retourne la mention correspondant à la note.
 * >= 16 → "Très bien" / >= 14 → "Bien" / >= 12 → "Assez bien"
 * >= 10 → "Passable" / < 10 → "Insuffisant"
 * @param {number} note
 * @returns {string}
 * @example mention(17) → "Très bien"
 */
/*DÉBUT 
Fonction mention(note)
    SI note est supérieur ou égal à 16 ALORS
        RETOURNER "Très bien"
    SINON SI note est supérieur ou égal à 14 ALORS
        RETOURNER "Bien"
    SINON SI note est supérieur ou égal à 12 ALORS
        RETOURNER "Assez bien"
    SINON SI note est supérieur ou égal à 10 ALORS
        RETOURNER "Passable"
    SINON
        RETOURNER "Insuffisant"
    FIN SI
FIN*/

export const mention = (note) => {
  if (note >= 16) {
    return "Très bien";
  } else if (note >= 14) {
    return "Bien";
  } else if (note >= 12) {
    return "Assez bien";
  } else if (note >= 10) {
    return "Passable";
  } else {
    return "Insuffisant";
  }
}

/**
 * [FACULTATIF]
 * Retourne "Fizz" si divisible par 3, "Buzz" par 5,
 * "FizzBuzz" si les deux, sinon le nombre en string.
 * @param {number} n
 * @returns {string}
 * @example fizzbuzz(15) → "FizzBuzz"
 */
/*DÉBUT 
Fonction fizzbuzz(n)
    SI n est divisible par 3 ET n est divisible par 5 ALORS
        RETOURNER "FizzBuzz"
    SINON SI n est divisible par 3 ALORS
        RETOURNER "Fizz"
    SINON SI n est divisible par 5 ALORS
        RETOURNER "Buzz"
    SINON
        RETOURNER n converti en chaîne de caractères
    FIN SI
FIN*/

export const fizzbuzz = (n) => {
if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return String(n);
  }
}