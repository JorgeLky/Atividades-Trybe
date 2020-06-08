// code by Lyraah

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercise 1

let addProp = (a, b, c) => a[b] = c;

addProp(lesson2, 'turno', 'manha');

// exercise 2

let keys = (a) => console.log(Object.keys(a));
console.log(keys(lesson2));

