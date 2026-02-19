// Задание 1:
// 1)	Создайте пустой объект user.
// 2)	Добавьте свойство name со значением 'John'.
// 3)	Добавьте свойство surname со значением 'Smith'.
// 4)	Измените значение свойства name на 'Pete'.
// 5)	Удалите свойство name из объекта.
// 6)	Выведите объект user в консоль на каждом шаге, чтобы проследить изменения.
// Ожидаемый результат: На последнем шаге объект user должен содержать только свойство surname: 'Smith'.


let user = {
    name: "John",
    surname: "Smith",
};
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);