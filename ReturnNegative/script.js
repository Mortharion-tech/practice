//  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (num <= 0) {
      return num;
    } else {
      const negNum = num - num*2;
      return negNum;
    }
  }