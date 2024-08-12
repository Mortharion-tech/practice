/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x){
    //x.forEach((value, index) => x[index] = value * 2);
    x = x.map((value) => {
        return value*2;
    });
    return x;
  }