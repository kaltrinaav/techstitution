
//document.write("Hello");
console.log("Hello world!");
var x, y, z;
x = 5;
y = 6;
z = x + y;
//document.write(z);

function showNameAndAge(name,age){

	console.log("Emri im eshte "+name+" dhe jam "+age+" vjec");
}
showNameAndAge("Kaltrina",20);
window.alert("Kaltrina");

	function factorial(number){
	   var prod=1;
	  for (var i = number; i > 0; i--) {
	  	   prod=prod*i;
	  }
	return prod;
	}

	document.write("5! faktoriel eshte e barabarte me "+factorial(5));