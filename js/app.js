

for (var i = 1; i <= 100; i ++) 
{

	if (i % 15 === 0){
	console.log("FizzBuzz");
	document.write("FizzBuzz");
	document.write("<br/>");
}
	
	else if (i % 5 === 0){
	console.log("Buzz");
  document.write("Buzz");
	document.write("<br/>");

}
	else if (i % 3 === 0){
	console.log("Fizz");
  document.write("Fizz");
	document.write("<br/>");
}


else {
console.log(i);
document.write(i);
document.write("<br/>");
}

}











