/* Given an array of numbers, calculate the mean, median, and mode. */

function mean(array) {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    sum += element;
  }
  average = sum / array.length;
  return average;
}

function median(array) {
  let firstElement = 0;
  let secondElement = 0;
  if (array.length % 2 !== 0) {
    let element = Math.ceil(array.length / 2);
    return array[element - 1];
  }
  if (array.length % 2 === 0) {
    firstElement = array[array.length / 2 - 1];
    secondElement = array[array.length / 2];
    let element = (firstElement + secondElement) / 2;
    return element;
  }
}

function mode(array = []) {
  let maxCount = 0;
  let x = 0;
  let mode = [];
  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        counter++;
      }
    }
    if (maxCount < counter) {
      maxCount = counter;
      mode = [];
      mode = [array[i]];
      console.log(array[i], counter);
    } else if (counter === maxCount && !mode.includes(array[i])) {
      mode.push(array[i]);
      console.log(array[i], counter);
    }
    if (mode.length * (counter + 1) === array.length) {
      mode = [];
    }
    counter = 0;
  }
  return mode;
}

const Stats = {
  round: (value) => Math.round(value * 100) / 100,
  mean,
  median,
  mode,
};

module.exports = { Stats, mean, median, mode };
