// Напишите функцию sumSalaries(salaries), которая:
// 1)	Перебирает все свойства объекта.
// 2)	Суммирует только те значения, которые являются числами.
// 3)	Возвращает итоговую сумму.
// 4)	Если объект пуст или в нём нет числовых свойств, функция должна возвращать 0.
// Ожидаемый результат: Для объекта salaries сумма должна быть 1950.

let salaries = {
  vika: 500,
  ono: 800,
  will_byers: 650,
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) {

    let value = salaries[key];

    if (!isNaN(value)) {
      sum += value;
    }
    
  }
  return sum;
}


console.log(sumSalaries(salaries));
