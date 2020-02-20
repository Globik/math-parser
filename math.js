/*
 Зачем самостоятельная реализация парсера, когда умные люди давно все за тебя сделали? 
 */

var math = require('mathjs-expression-parser');

function evaluate(expr, scope) {
console.log(expr, '=', math.eval(expr,scope || {}))
}

console.log("Введите математическое выражение:");
	
var stdin = process.openStdin();

stdin.addListener("data", function(expr) {
evelaute(expr.toString().trim());
});
