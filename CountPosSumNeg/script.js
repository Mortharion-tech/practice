/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

function countPositivesSumNegatives(input) {
    if (input === null) {
      return [];
    } else if (input.length === 0) {
      return [];
    } else {
      const allPositives = input.filter((num) => num > 0);
      const countPositives = allPositives.length;
      const allNegatives = input.filter((num) => num < 0);
      const sumNegatives = allNegatives.reduce((acc, num) => acc + num, 0);
      return [countPositives, sumNegatives];
    }
  }