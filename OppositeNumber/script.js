//  Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//  Examples:
//  1: -1
//  14: -14
//  -34: 34

function opposite(number) {
    if (number > 0) {
      return -number;
    } else {
      return Math.abs(number);
    }
  }