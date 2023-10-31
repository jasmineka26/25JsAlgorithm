/* Given an array and a size, split the array items into a list of arrays of the given size. */

// function chunk(array, n) {
//   const chunkedArray = [];

//   for (let i = 0; i < array.length; i += n) {
//     const newArr = array.slice(i, i + n);
//     chunkedArray.push(newArr);
//   }

//   return chunkedArray;
// }

function chunk2(array = [], n = 0) {
  const result = [];
  let chunk = [];

  for (let i = 1; i <= array.length; i++) {
    chunk.push(array[i - 1]);
    if (i % n === 0) {
      result.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length !== 0) result.push(chunk);
  return result;
}

function chunk(array, n) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += n) {
    const newArr = slice(array, i, i + n);
    chunkedArray.push(newArr);
  }

  return chunkedArray;
}

function slice(array, start, end) {
  let result = [];
  let length = array.length;

  if (start < 0) {
    start = Math.max(start + length, 0);
  } else {
    start = Math.min(start, length);
  }

  if (end === undefined || end > length) {
    end = length;
  } else if (end < 0) {
    end = Math.max(end + length, 0);
  } else {
    end = Math.min(end, length);
  }

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  // console.log(start, end);
  return result;
}

module.exports = { chunk: chunk2 };
