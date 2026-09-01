/**
 * words.js - Lista de palabras en español por categoría
 */
const WORDS = {
  animales: [
    'perro',
    'gato',
    'caballo',
    'elefante',
    'jirafa',
    'tigre',
    'ballena',
    'delfin',
    'aguila',
    'serpiente',
    'cocodrilo',
    'canguro'
  ],
  paises: [
    'argentina',
    'colombia',
    'españa',
    'mexico',
    'brasil',
    'chile',
    'peru',
    'venezuela',
    'ecuador',
    'uruguay',
    'paraguay',
    'bolivia'
  ],
  frutas: [
    'manzana',
    'platano',
    'naranja',
    'uva',
    'fresa',
    'sandia',
    'mango',
    'piña',
    'cereza',
    'limon',
    'melon',
    'kiwi'
  ],
  profesiones: [
    'medico',
    'abogado',
    'profesor',
    'ingeniero',
    'arquitecto',
    'enfermera',
    'piloto',
    'bombero',
    'policia',
    'periodista',
    'chef',
    'dentista'
  ],
  colores: [
    'rojo',
    'azul',
    'verde',
    'amarillo',
    'naranja',
    'morado',
    'rosa',
    'negro',
    'blanco',
    'gris',
    'dorado',
    'plateado'
  ],
  alimentos: [
    'arroz',
    'pan',
    'leche',
    'queso',
    'carne',
    'pollo',
    'pescado',
    'huevo',
    'ensalada',
    'sopa',
    'pasta',
    'pizza'
  ],
  deportes: [
    'futbol',
    'basquet',
    'tenis',
    'natacion',
    'boxeo',
    'beisbol',
    'golf',
    'hockey',
    'voleibol',
    'surf',
    'karate',
    'ciclismo'
  ]
};

const CATEGORY_NAMES = {
  animales: 'Animales',
  paises: 'Paises',
  frutas: 'Frutas',
  profesiones: 'Profesiones',
  colores: 'Colores',
  alimentos: 'Alimentos',
  deportes: 'Deportes'
};

function getRandomWord() {
  const categories = Object.keys(WORDS);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryWords = WORDS[randomCategory];
  const randomWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];

  return {
    word: randomWord.toUpperCase(),
    category: CATEGORY_NAMES[randomCategory]
  };
}
