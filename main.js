// function f (a, b, c) { 
// 	function sum (a, b) { 
// 	  return a + b; 
// 	} 
//  }

// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
// Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function f(a=2,b=3,c){
	function sum(a,b){
		return a+b;
	}
	// console.log(a);
	// console.log(b);
	// console.log(c);

}
let result =f();
console.log(result);
