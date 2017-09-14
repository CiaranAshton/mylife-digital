// Import nodes file system
const fs = require('fs');

// given a CSV file will return a 2d array
/**
 * Adds two numbers
 * @param {File} file
 * @return {Array} data
 */
function getData(file) {
  const csv = fs.readFileSync(file, 'UTF-8');
  const arrays = csv.split('\n');
  const data = arrays.map(array => {
    return array.split(',');
  });
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].filter(Boolean);
  }
  return data;
}

// Any functions or values in the following object will be accessible to
// accessible to and files that import the library
const calc = {
  // Total number of elements in the array
  /**
   * Adds two numbers
   * @param {File} file
   * @return {Number} total
   */
  total: function(file) {
    const total = [].concat(...getData(file)).length;
    return total;
  },
  // Total value of all elements summed together
  /**
   * Adds two numbers
   * @param {File} file
   * @return {Number} sum
   */
  summation: function(file) {
    const data = getData(file);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        sum += parseInt(data[i][j]);
      }
    }
    return sum;
  },
  // Returns the mean average of all the values
  /**
   * Adds two numbers
   * @param {File} file
   * @return {Number} mean
   */
  mean: function(file) {
    const result = this.summation(file) / this.total(file);
    const mean = parseFloat(result.toFixed(3));
    return mean;
  },
  // Returns the highest number of integers in a single line
  /**
   * Adds two numbers
   * @param {File} file
   * @return {Number} most
   */
  inline: function(file) {
    const data = getData(file);
    let most = 0;
    for (let i = 0; i < data.length; i++) {
      let inline = 0;
      for (let j = 0; j < data[i].length; j++) {
        inline += 1;
        inline > most ? (most = inline) : null;
      }
    }
    return most;
  },
  // Returns the most common integer
  /**
   * Adds two numbers
   * @param {File} file
   * @return {Number} ans
   */
  mode: function(file) {
    const array = [].concat(...getData(file));

    const mode = array
      .sort(
        (a, b) =>
          array.filter(v => v === a).length - array.filter(v => v === b).length
      )
      .pop();
    const ans = parseInt(mode);
    return ans;
  }
};

module.exports = calc;
