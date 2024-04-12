function toCase(text) {
  // write your code here
	const lowerCase = inputString.toLowerCase();
	const upperCase = inputString.toUpperCase();
	return `(lowercase)-$(upperCase)`;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
