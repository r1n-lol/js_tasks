// 1.	Дан массив: let shoppingList = ["Молоко", "Хлеб", "Яйца"];
// Выполните операции:
// Добавьте "Сыр" в конец списка
// Добавьте "Кофе" в начало списка
// Удалите второй элемент (индекс 1)
// Удалите последний элемент
// Выведите итоговый список и его длину
let shoppingList = ["Молоко", "Хлеб", "Яйца"];


shoppingList.push("Сыр");

shoppingList.unshift("Кофе");


shoppingList.splice(1, 1);

shoppingList.pop();


console.log("Итоговый список:", shoppingList);
console.log("Длина списка:", shoppingList.length);

