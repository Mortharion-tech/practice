//  Complete the square sum function so that it squares each number passed into it and then sums the results together.
//  For example, for [1, 2, 2] it should return 9

function squareSum(numbers){
    let totalNumber = 0;
    for (const number of numbers) {
      totalNumber = totalNumber + number * number;
    }
    return totalNumber;
  }