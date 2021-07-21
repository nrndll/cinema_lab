const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitleList = (films) => {
  const filmTitles = films.map((film) => {return film.title});
  return filmTitles;
};

Cinema.prototype.findFilm = (filmTitle, films) => {
  const result = films.find((film) => {return film.title === filmTitle});
  return result;
};

module.exports = Cinema;
