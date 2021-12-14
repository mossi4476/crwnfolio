// write program to print the following pattern
function printPattern(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
printPattern(5);
