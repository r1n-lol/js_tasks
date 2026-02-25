// Задача 5: Калькулятор чаевых
// Создайте программу для расчёта чаевых в ресторане. Даны:
// • billAmount — сумма счёта (например, 2500)
// • serviceQuality — оценка обслуживания: "отлично" (20%), "хорошо" (15%), "нормально" (10%), "плохо" (5%)
// • numberOfPeople — количество человек для разделения счёта (например, 4)
// Рассчитайте и выведите:
// 1. Сумму чаевых в рублях и процентах
// 2. Общую сумму к оплате (счёт + чаевые)
// 3. Сколько должен заплатить каждый человек
// Дополнительно: добавьте проверку корректности введённых данных.
let billAmount = 2500;
let serviceQuality = "хорошо";
let numberOfPeople = 4;
let tipPercentage;
let tipAmount;
let totalAmount;
let amountPerPerson;

switch(serviceQuality) {
    case "отлично":
        tipPercentage = 20;
        break;
    case "хорошо":
        tipPercentage = 15;
        break;
    case "нормально":
        tipPercentage = 10;
        break;
    case "плохо":
        tipPercentage = 5;
        break;
    default:
        console.log("Некорректная оценка обслуживания");
}

tipAmount = billAmount * (tipPercentage / 100);
totalAmount = billAmount + tipAmount;
amountPerPerson = totalAmount / numberOfPeople;

console.log(`Сумма чаевых: ${tipAmount} руб. (${tipPercentage}%)`);
console.log(`Общая сумма к оплате: ${totalAmount} руб.`);
console.log(`Каждый человек должен заплатить: ${amountPerPerson} руб.`);