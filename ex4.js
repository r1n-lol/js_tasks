// Задача 4: Проверка логина и пароля
// Создайте две переменные: login и password. Напишите проверку:
// • Если login равен "admin" И password равен "qwerty", вывести "Добро пожаловать"
// • Иначе вывести "Ошибка входа"
let login = "admin";
let password = "qwerty";  

if (login === "admin" && password === "qwerty") {
    console.log("Добро пожаловать");
} else {
    console.log("Ошибка входа");
}