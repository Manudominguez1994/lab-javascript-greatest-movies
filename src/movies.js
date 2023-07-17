// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  allDirector = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramafilter = 0;
  moviesArray.filter((tipo) => {
    if (tipo.director === "Steven Spielberg" && tipo.genre.includes("Drama")) {
      return dramafilter++;
    }
  });
  // console.log(dramafilter)
  return dramafilter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let mediascore = moviesArray.reduce((acc, elemnt) => {
    // console.log(acc + elemnt)
    if (elemnt.score !== undefined) {
      return acc + Number(elemnt.score);
    } else {
      return acc;
    }
  }, 0);

  let avg = mediascore / moviesArray.length;
  let twodigit = avg.toFixed(2);
  let total = parseFloat(twodigit);
  // console.log(total)
  return total;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let mediaDrama = moviesArray.reduce((acc, elemnt) => {
    if (elemnt.genre.includes("Drama") && elemnt.score !== undefined) {
      return acc + Number(elemnt.score);
    } else {
      return acc;
    }
  }, 0);

  let cantidadDrama = 0;
  moviesArray.forEach((dramaFilm) => {
    if (dramaFilm.genre.includes("Drama")) {
      cantidadDrama++;
    }
  });

  if (cantidadDrama === 0) {
    return 0;
  }

  let resultmedia = mediaDrama / cantidadDrama;
  let resultTwoDiggi = resultmedia.toFixed(2);
  let resultTotal = parseFloat(resultTwoDiggi);
  console.log(resultTotal);
  return resultTotal;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrCopy = JSON.parse(JSON.stringify(moviesArray));

  arrCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  return arrCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrCopy = JSON.parse(JSON.stringify(moviesArray));

  arrCopy.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  let filtered = arrCopy.slice(0, 20);
  let filteredSanitize = filtered.map((f) => f.title);

  // resultFinal.sort();
// console.log(resultFinal);
console.log(filteredSanitize.length)
  return filteredSanitize;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
