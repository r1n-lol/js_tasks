// Задание 3:
// 1)	Создайте переменные itemName со значением 'ноутбук' и itemPrice со значением 75000.
// 2)	Создайте объект item, используя синтаксис коротких свойств (ES6) для этих переменных. В объекте должно быть два свойства: itemName и itemPrice с соответствующими значениями.
// 3)	Создайте переменную chosenProperty и присвойте ей строку 'itemName'.
// 4)	Используя квадратные скобки и переменную chosenProperty, получите значение свойства itemName из объекта item и выведите его в консоль.
// 5)	Используя вычисляемое свойство при создании нового объекта discount, создайте в нём свойство с именем, взятым из переменной chosenProperty 
// (т.е. свойство 'itemName'), и значением 15 (процент скидки). Выведите объект discount в консоль.

let itemName = 'ноутбук';
let itemPrice = '75000';

let item = {
    itemName,
    itemPrice,
};

let chosenProperty = item.itemName;

console.log( item[chosenProperty] );

let discount = {
    [chosenProperty]:15
};

console.log( discount );


