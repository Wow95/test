/*Методы поиска тегов и id*/

/*document.getElementById - ищет id в HTML документе*/
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
/*document.getElementsByTagName - ищет тег в HTML документе*/
var ul = document.getElementsByTagName("ul");
/*document.getElementsByName - ищет атрибут name в HTML документе*/
// var ul = document.getElementsByName("ul");
/*document.getElementsByName - ищет класс в HTML документе*/
// var main_field = document.getElementsByClassName("main_field");
/*list.getElementsByClassName - ищет класс item в контейнере <ul id="list">*/
var story = myList.getElementsByClassName("item");

var popup = document.getElementsByClassName("popup")[0]; /*Получаем первый дочерний элемент в <div class="popup">*/

var close = document.querySelector(".close") /*Метод querySelector позволяет получить элемент (тег) страницы по произвольному селектору CSS.

Чтобы получить элемент с заданным id, нужно написать #его_id, с заданным классом - .его_класс и так далее - любой селектор.

С полученным элементом можно будет производить различные манипуляции: менять его текст, атрибуты, css стили и так далее.*/

console.log(btn1);
console.log(btn2);
// console.log(main);
// console.log(myList);
// console.log(ul[0]); /*В js идет отсчет от 0, поэтому если хотим достучаться до первого элемента, то ставим 0*/
// console.log(main_field);
console.log(story);
// console.log(popup);
// console.log(close);
console.log(ul);

/*main - обращаемся к перменной main, style - обращаемся к документу со стилями, свойство CSS - прописываем свойство CSS = "его значение" */
// main.style.background = "green"



// function addItem(argument) {
	
// }

// function delItem(argument) {
	
// }


/*2 способ*/

// btn1.onclick = function() {
// 	здесь прописываем все действия которые нам необхадимы
// }

/*3 способ - передаем уже готовую функцию*/

// btn1.onclick = addItem;

/*Двумя последними способами, можно задать только одну функцию, если мы будем создавать новую функцию, то она перекроет старую */

/*Чтобы одна функция не перекрывала другую*/



function addItem(){
	var newLi = document.createElement("li"); /*Создает новый елемент, в данном случае это тег li*/
	newLi.innerHTML = "Лох"; /*Добавляет какой либо код или элемент в HTML*/
	newLi.clssName = "item"; /*Присваем новому элементу тот же класс, для стилилизации*/
	myList.appendChild(newLi); /*myList - обращаемся к родительскому контейнеру (ul), и добавляем в него дочерний элемент (li)*/
}

function delItem() {
	myList.removeChild(story[0]); /*удаляет дочерний элемент*/
}



btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);