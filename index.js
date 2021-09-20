function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function testNamedFunction() {};
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Anonymous");
  }
}
