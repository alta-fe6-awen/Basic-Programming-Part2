function playWithAsterik(n) {

let s ="";
for(let h = 1; h <= n; h++){
 for(let i = 1; i <= n - h; i++){
  s += ' ';
 }
 for(let j = 1; j < 2 * h; j++){
  s += "*";
 }
 s += '\n';   
}

console.log(s);
	
}

playWithAsterik(5);
