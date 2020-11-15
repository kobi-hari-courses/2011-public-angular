var colors = require('colors');

var x = 1;
var y = 1;

console.log("1: ".green + "".yellow + x);
console.log("2: ".green + "".yellow + y);

for (var i = 0; i < 50; i++) {
    var temp = x;
    x = x + y;
    y = temp;

    var prefix = (i + 3).toString() + ": ";
    var postfix = x.toString();

    console.log(prefix.green + postfix.yellow);
}

