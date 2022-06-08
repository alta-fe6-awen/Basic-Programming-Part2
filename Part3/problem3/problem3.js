function cetakTablePerkalian(number) {
let value = "", index = 0;
  for (let i = 1; i <= number; i++) {
  	for (let j = 1; j <= number; j++){
  		index = i*j;
  		value += `${index.toString()}`;
  		if (index < 10) {
  			value += " ";
  		}
  	}
  	if (number != i ) value += "\n";
  }
  return value;
}

cetakTablePerkalian(9);
