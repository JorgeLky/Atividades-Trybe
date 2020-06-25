const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};


const fetchJoke = () => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  document.querySelector('body').appendChild(ul);
  document.querySelector('ul').appendChild(li);
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(insert => li.innerText = insert.joke);
};

window.onload = () => fetchJoke();



const numbers8000 = new Promise((resolve, reject) => {
  const array = [20, 40];
  const sum = array.reduce(((accumulator, currentValue) => accumulator + (currentValue ** 2)), 0);
    if (sum < 8000) {
      const newArray = [sum / 2, sum / 3, sum / 5, sum / 10]
      resolve(newArray);
    } else {
      reject('E mais de 8000!!!');
    }
  })

numbers8000.then((message) => console.log(message)).catch((err) => console.log(err));
numbers8000.then((message) => console.log(message.reduce(((accumulator, currentValue) => accumulator + currentValue), 0)));

