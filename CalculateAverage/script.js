/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
    if (array.length > 0) {
      const arrayTotal = array.reduce((accumulator, number) => accumulator + number, 0);
      return arrayTotal / array.length;
    } else {
      return 0;
    }
  }