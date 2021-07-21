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

Cinema.prototype.filmsByGenre = (filmGenre, films) => {
  const result = films.filter((film) => {return film.genre === filmGenre});
  return result;
};

Cinema.prototype.checkYear = (filmYear, films) => {
  const result = films.some((film) => {return film.year === filmYear});
  return result;
};

Cinema.prototype.noFilms = (filmYear, films) => {
  const result = films.every((film) => {return film.year !== filmYear});
  return result;
}
module.exports = Cinema;
