/**
 * 
 */

var a = 10
var b = "hello"

	//console.log(b)

	
	var i=1;
function f(){
	
	if(i<=10){
		console.log(i++);
		f();
	}
	
}

f();

console.log(b)