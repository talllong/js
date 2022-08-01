const namberOfFilms = prompt('Сколько фильмов вы посмотрели', '');

const personalMoviesDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);