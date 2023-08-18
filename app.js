const express = require('express');
const app = express();
const port = 3000;
const { pets } = require('./petList');
const home = require('./routes/main');
const animals = require('./routes/animals');
const animal = require('./routes/animal');

app.use(home);
app.use(animals);
app.use(animal);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
