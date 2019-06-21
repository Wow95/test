// alert ("Hello world!"); /*Выводить модальное окно которое запрещает действие пока не нажмешь ок*/
console.log("Hello world!"); /*Выводить текст в консоль*/

var myFirstVar = 50; /*var - переменная myFirstVar - название переменной = - значение переменной*/

// myFirstVar = 100;

console.log(myFirstVar); /*выводит в консоль значение переменной*/

/*сложение данных в скобках*/
console.log(4 + 6);
console.log(4 + "Hello world!");
console.log("Hello world!" + " Hello world!");



var myFirstVar = ("Это мой тект!"); 
var mySecondVar = ("Это моя переменная!"); 

// myFirstVar = 100;

console.log(myFirstVar + mySecondVar); 


var myFirstVar = ("Это мой тект!"); 
var mySecondVar = ("Это моя переменная!"); 

// myFirstVar = 100;

// alert(myFirstVar + mySecondVar); 


var incr = 10,
    decr = 10;

incr++;  /*Прибавляет к значению переменной +1*/
decr--;  /*Отнимает от значения переменной -1*/

console.log(incr); 
console.log(decr); 

console.log(10%3); /*Возвращает остаток от деления = 1*/

/*Также есть знаки больше> меньше< равно=*/

var num = "5" /*Один знак = присвает значение*/
console.log(num == 5); /*Два знака = сравнивают по значению, то есть переменная со значением 5=5*/
console.log(num === 5); /*Три знака = сравнивают по присваеному значению, то есть переменная со значением 5 не равно присваевому значению 5*/
console.log(num === "5"); 
console.log(num = 10); 
console.log(num != 5); /*!= - знак не равен*/

/*Типы данных*/

var number = 5; /*Число*/
var string = "Hello World"; /*Строка*/
var symbol; /*Символ*/
true /*Логические*/
false /*Логические*/

console.log(6/2 == 3);
console.log(10/2 == 3);


// var und; /*undefined - выводит в консоль*/

// console.log(und);

// var obj = {};

console.log(typeof obj);
console.log(typeof string);
console.log(typeof number);


if (10 + 5 == 15) {
	alert("Это правильно");
}

else {
	alert("Это не правильно");
}


/*var i = 1 - это начало цикла, i < 8 - это конец цикла, i++ - это действие цикла */

for (var i = 1; i < 8; i++) { 
	console.log(i);
}


// var out = 5;

// function myFirstFunc(x,y) {
// 	var inner = 10;

// 	console.log(out);
     
// 	return (x + y);
// }

// myFirstFunc();
// console.log(inner);



// var out = 5;  /*Это глобальное значение*/

// function myFirstFunc(x,y) { /*Параметры которая эта функция будет принимать*/
// 	var inner = 10; /*Это локальное значение*/

// 	console.log(out);
     
// 	return (x + y);
// }

// myFirstFunc();
// console.log(inner);





/*var out = 5;

function myFirstFunc(x,y) {
	var inner = 10; Если перменная заданна внутри функции, то в консоли это отображатся не будет
     
	return (x + y);
}

console.log(myFirstFunc(out,2));*/




// var out = 5;
// var inner = 10; 

// function myFirstFunc(x,y) {
	
     
// 	return (x + y);
// }

// console.log(myFirstFunc(out,inner));




var out = 10;
var inner = 5; 

function myFirstFunc(x,y) {
	
     
	return (x / y);
}

console.log(myFirstFunc(out,inner));
