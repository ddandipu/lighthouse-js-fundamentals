
var args = process.argv.slice(2);

function min(numbers) {
  var current= parseInt(numbers[0]);
  var length0=numbers.length;
  for(var i=0; i<length0; i++){
    if (current > numbers[i]) {
      current= parseInt(numbers[i]);
    }
    } console.log(current);
  }


min(args);

/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

