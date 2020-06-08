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
keys(lesson1);

// exercise 3

let leng = (a) => console.log(Object.keys(a).length);
leng(lesson1);

// exercise 4

let values = (a) => console.log(Object.values(a));
values(lesson1);

// exercise 5

let allLessions = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessions);

// exercise 6

let allStudents = () => console.log(lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes);
allStudents();

// exercise 7

let selector = (a, b) => console.log(Object.values(a)[b]);
selector(lesson1, 2);

// exercise 8

function selectorTrue(a, b, c) {
  select = 0;
  for(i = 0; i < Object.keys(a).length; i += 1) {
    if (Object.keys(a)[i] === b && Object.values(a)[i] === c){
      select += 1;
    }
  }
  if (select >= 1){
    console.log(true);
  } else {
    console.log(false);
  }
}

selectorTrue(lesson1, 'materia', 'Matemática');
