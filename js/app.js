function fizz() {

	function write(string){
		$('#output').append(string + '<br/>')
	}
	
var number = parseInt(document.getElementById("number").value);

if (!number){
	alert("Input a number");
}

for (var i = number; i<=100; i++) {

if (i % 15 === 0) {
  write('FizzBuzz')
// document.getElementById("output").write("FizzBuzz");
// document.write("<br/>");
}

else if (i % 3 === 0){
  write('Fizz')
// document.write("Fizz");
// document.write("<br/>");
}


else if (i % 5 === 0) {
	write('Buzz')
 // document.write("Buzz");
 // document.write("<br/>");
}


else{
	write(i)
// document.write(i);
// document.write("<br/>");
}

 }
}