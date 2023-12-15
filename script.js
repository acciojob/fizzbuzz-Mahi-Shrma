//your JS code here. If required.
for (let i = 1; i <21; i++) {
  alert(print(i));
}
function print(i) {
	let output = "";
	if (i%3==0 && i%5==0) {
		output+= "FizzBuzz";
		return output;
	}
	else if (i%3==0) {
		output += "Fizz";
		return output;
	}
	else if (i%5==0) {
		output += "Buzz";
		return output;
	}
return i;
}
// for (let i = 1; i <21; i++) {
//  alert(i"\n");
// }
// for (let i = 1; i <= 20; i++) {
//   let output = "";
// 	if (i%3==0 && i%5==0) {
// 	output+= "FizzBuzz";
// 	}
//   else if (i % 3 == 0) {
//     output += "Fizz";
//   }
//   // If the number is divisible by 5, append "Buzz" to the output
//   else if (i % 5 == 0) {
//     output += "Buzz";
//   }
//   // If the output is still empty, use the number itself as the output
//   if (output == "") {
//     output = i;
//   }
//   // Display the output using alert
//    // alert(output);
// }