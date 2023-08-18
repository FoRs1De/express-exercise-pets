const pets = require('../petList');

const animal = (req, res) => {
  let animal = req.params.pet_id;
  let animalType = req.params.pet_type;
  let myAnimal = pets[animalType].filter((item) => {
    return item.name == animal;
  });
  console.log(myAnimal);

  res.send(`<h1>${myAnimal[0].name}</h1>
  <img src='${myAnimal[0].url}'/>
  <p>${myAnimal[0].description}</p>
  <ul>
  <li>
  Breed: ${myAnimal[0].breed}
  </li>
  <li>
  Age: ${myAnimal[0].age}
  </li>
  </ul>
  `);
};

module.exports = { animal };
