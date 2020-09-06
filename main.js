// function f (a, b, c) { 
// 	function sum (a, b) { 
// 	  return a + b; 
// 	} 
//  }

// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
// Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.
var a;
var b;
var c;
function f(a=2,b=3,c){
	for (let i=0;i<arguments.length;i++){
		var argFunc=false;
		if(typeof arguments[2]==='function'){
			sum(a,b)
			argFunc=arguments[2];
			argFunc()
		}
		
	}
	if (argFunc){
		return argFunc()
	}else{
		return sum(a,b)
	}	
}


function sum (a, b) { 
	return a + b; 
} 

console.log('Функция f(): ', f(3,5,function(){return 'Функция из третьего ( C ) агрумента'}));

