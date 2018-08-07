var fs = require("fs");

fs.readFile('input.txt', function(error, data) {
	if (error) return console.log(error);
	console.log(data.toString());
});

console.log("Program ended !");