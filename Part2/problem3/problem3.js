function primeNumber(number) {
	let pembagi =0;
  for (let i = 0; i <= number; i++) {
  	if (number % i == 0) {
  		pembagi++
  	}
  }
  if (pembagi == 2 ) {
  	return true;
  }else{
  	return false;
  }
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
