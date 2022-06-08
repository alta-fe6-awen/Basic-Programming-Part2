function drawXYZ(high) {
  let value = "", index = 0;

  for (let i = 1; i <= high; i++) {
  	for (let j = 1; j <= high; j++){
  		index++;
  		if (index % 3 == 0) {
  			value += "X ";
  		}else if (index % 2 == 0) {
  			value += "Z ";
  		}else {
  			value += "Y ";
  		}
  	}
  	value += "\n";
  }
  return value;

}

console.log(drawXYZ(3));
console.log(drawXYZ(5));
console.log(drawXYZ(1));
