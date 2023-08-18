const home = (req, res) => {
  const adopt = `<h1> Adopt a Pet </h1> 
  <p>Browse through the links below to find your new furry friend:</p> 
  <ul>
  <a href='dogs'><li>Dogs</li></a>
  <a href='cats'><li>Cats</li></a>
  <a href='rabbits'><li>Rabbits</li></a>
  </ul>`;
  res.send(adopt);
};

module.exports = { home };
