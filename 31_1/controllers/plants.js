const express = require('express').Router;
const appRouter = express();

let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

const byId = (arr, id) => {
  return arr.find(item => item.id === id);
}

const deleteById = (arr, id) => {
  arr.forEach((item, index) => {
    if (item.id === id) {
      arr.splice(index, 1);
    }
  })
}

const updateById = (arr, id, obj) => {
  arr.forEach((item, index) => {
    if (item.id === id) {
      obj.id = id;
      arr[index] = obj;
    }
  })
}

const addPlant = (arr, obj) => {
  obj.id = (arr.length + 1);
  arr.push(obj);
}

const sunnyTrue = (obj, ver) => {
  if (obj[`${ver}`] === true) {
    return obj;
  } else {
    return 'not need sun';
  }
}

const sunny = (arr, id) => {
  const search = arr.find((item) => item.id === id);
  console.log(search);
  const nSun = sunnyTrue(search, 'needsSun');
  console.log(nSun);
  return nSun;
}

appRouter.get('/plants', async (_req, res) => {
  res.status(200).json(defaultPlants);
});

appRouter.get('/plant/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await byId(defaultPlants, Number(id));;
  res.status(200).json(plant)
});

appRouter.delete('/plant/:id', async (req, res) => {
  const { id } = req.params;
  deleteById(defaultPlants, Number(id));
  res.status(200).json(defaultPlants);
});

appRouter.post('/plant', async(req, res) => {
  const { body } = req;
  addPlant(defaultPlants, body);
  res.status(200).json(defaultPlants);
})

appRouter.post('/plant/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  updateById(defaultPlants, Number(id), body);
  res.status(200).json(defaultPlants);
});

appRouter.get('/sunny/:id', async(req, res) => {
  const { id } = req.params;
  const plant = await sunny(defaultPlants, Number(id));
  res.status(200).json(plant);
})
module.exports = { appRouter };