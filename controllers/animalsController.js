const pets = require('../petList');

const animals = (req, res) => {
  let animal = req.params.pet_type;
  res.send(
    `<h1>List of ${animal}</h1>` +
      '<ul>' +
      pets[animal].map((item) => {
        return `<a href='/${animal}/${item.name}'><li>${item.name}</li></a>`;
      }) +
      '</ul>'
  );
};

module.exports = { animals };
