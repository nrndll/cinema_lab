const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitleList = (array) => {
  const filmTitles = array.map((film) => {return film.title});
  return filmTitles;
};

module.exports = Cinema;
