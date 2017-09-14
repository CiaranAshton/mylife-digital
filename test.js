// Import library
const mylife = require('./mylife');

// Import sample data
const sampleFile = 'sample.csv';
const testResults = require('./sampleData');

// Test results of functions against the expected results of the test data
function testTotal(data) {
  return mylife.total(data) === testResults.total ? true : false;
}
function testSummation(data) {
  return mylife.summation(data) === testResults.summation ? true : false;
}
function testMean(data) {
  return mylife.mean(data) === testResults.mean ? true : false;
}
function testInline(data) {
  return mylife.inline(data) === testResults.inline ? true : false;
}
function testNode(data) {
  return mylife.mode(data) === testResults.mode ? true : false;
}

// Log the results of the tests
function passed(result) {
  console.log('-- ' + '\x1b[32m%s\x1b[0m', 'Passed');
  console.log(`---- Result: ${result}\n`);
}
function failed(actualResult, expectedResult) {
  console.log('-- ' + '\x1b[31m%s\x1b[0m', 'Failed');
  console.log(`---- Expected Result: ${expectedResult}`);
  console.log(`------ Type: ${typeof expectedResult}`);
  console.log(`---- Actual Result: ${actualResult}`);
  console.log(`------ Type: ${typeof actualResult}\n`);
}

// Check the results of the tests and display the results
function runResults(file) {
  console.log('\n\x1b[36m%s\x1b[0m', 'Test Total:');
  if (testTotal(file)) {
    passed(mylife.total(file));
  } else {
    failed(mylife.total(file), testResults.total);
  }
  console.log('\n\x1b[36m%s\x1b[0m', 'Test summation:');
  if (testSummation(file)) {
    passed(mylife.summation(file));
  } else {
    failed(mylife.summation(file), testResults.summation);
  }
  console.log('\n\x1b[36m%s\x1b[0m', 'Test mean:');
  if (testMean(file)) {
    passed(mylife.mean(file));
  } else {
    failed(mylife.mean(file), testResults.mean);
  }
  console.log('\n\x1b[36m%s\x1b[0m', 'Test most numbers in a line:');
  if (testInline(file)) {
    passed(mylife.inline(file));
  } else {
    failed(mylife.inline(file), testResults.inline);
  }
  console.log('\n\x1b[36m%s\x1b[0m', 'Test most common number:');
  if (testNode(file)) {
    passed(mylife.mode(file));
  } else {
    failed(mylife.mode(file), testResults.mode);
  }

  // Display a success message if all tests pass
  if (
    testSummation(file) &&
    testMean(file) &&
    testInline(file) &&
    testNode(file)
  ) {
    console.log('-- ' + '\x1b[32m%s\x1b[0m', 'ALL TESTS PASSED!\n');
  }
}

// Run the tests
runResults(sampleFile);
