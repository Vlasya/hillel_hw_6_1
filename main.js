// Дано массив строк array. В каждой необходимо найти позицию совпадения match.

// Читаем метод indexOf() – https://www.w3schools.com/jsref/jsref_indexof.asp, https://learn.javascript.ru/array-methods#poisk-v-massive

// Все совпадения сохранить в строку через разделитель.

// match ="hello";
// array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
// результат: "4, 0, 9, 4"

var array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
var match ="hello";
var result =[];
var resultStr

array.forEach(function(item,index){
	
	if(item.indexOf(match)>=0){
		result.push(item.indexOf(match))
				
	}
})
resultStr=result.join(', ')

console.log(resultStr);