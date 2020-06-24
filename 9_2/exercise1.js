const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => // 1a
  `${name} is ${value} ${measurementUnit} apart from the Sun`; // 5a

const mars = {
  name: "Mars", // 2a
  distanceFromSun: {
    value: 227900000, // 3a
    measurementUnit: "kilometers",// 4a
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A /6a
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
