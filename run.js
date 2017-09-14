const mylife = require('./mylife');

const file = process.argv[2];
const func = process.argv[3];

if (func === 'total') {
  console.log(mylife.total(file));
} else if (func === 'sum') {
  console.log(mylife.summation(file));
} else if (func === 'mean') {
  console.log(mylife.mean(file));
} else if (func === 'inline') {
  console.log(mylife.inline(file));
} else if (func === 'mode') {
  console.log(mylife.mode(file));
} else {
  console.log(`Total: ${mylife.total(file)}`);
  console.log(`Summation: ${mylife.summation(file)}`);
  console.log(`Mean: ${mylife.mean(file)}`);
  console.log(`Most elements in a line: ${mylife.inline(file)}`);
  console.log(`Most occuring number: ${mylife.mode(file)}`);
}
