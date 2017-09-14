MyLife Digital – Programming Task 2017
===================
### About the Library
The `mylife.js` library contains functionality to compute some basic statistics on a `.csv` file that contains integers typically in the range of $-1000$ to $1000$.

The library is written in vanilla Javascript using nodes filesystem module. The library requires Node to run. The system is built and tested on node version `8.4.0`.

Funtionality include:

- Return the number of integers in the file
- Return the sum of all the integers in the file
- Return the mean value of all the integers (to three decimal places)
- Return the most numbers of integers on a single line
- Return the most common integer

### Running the program

There are a number of ways to use the library.

#### Run from the command line using the run file
```shell
$ node run 'name_of_file.csv' 'task'
```
The file needs to be in the current directory.
Tasks include: `total` `sum` `mean` `inline` `mode`
If you opt for not putting a task on the end you will get results for all functions.

Example based on test data:
Input
```shell
$ node run sample.csv mode
```
Output
```shell
$ 52
```

#### Import the library to run within another file
As we are using node we are able to export the library as a module.

To import the library use the common library `require` syntax
```js
const mylife = require('./mylife');
```
This returns an object `mylife` with the methods.
Within the file you can call any of the methods on the object and pass the CSV file as a parameter.

The following example returns the most common integer (mode) in the given file:
```js
return mylife.mode('you_file.csv');
```

#### Run the test script
The final way to run the script is to run the test file. In the directory is two additional files `sample.csv` and `sampleData.js`. Here the `sample.csv` contains a test file and the `sampleData.js` contains an object with the expected results.

You can simple run `$ node test` in the terminal and it will print out to the console if all the tests pass of fail. The a test fails the program tries to aid by demonstrating to the expected result and the actual result. Further, it shows the type of the result to element any potential parsing issues.
```shell
$ node test
```
You can test against any given data by modifying the test data to what you like.
