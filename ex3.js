// Задача 3: Времена года через switch
// Используя оператор switch, напишите код, который по номеру месяца (1-12) выводит:
// • "Зима" — для месяцев 12, 1, 2
// • "Весна" — для месяцев 3, 4, 5
// • "Лето" — для месяцев 6, 7, 8
// • "Осень" — для месяцев 9, 10, 11

let season = 4;
let month;

switch(season){
    case 12:
    case 1:
    case 2:
        month = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        month = "Весна"
        break;
    case 6:
    case 7:
    case 8:
        month = "Лето";
        break;
    case 9:
    case 10:
    case 11:
        month = "Осень";
        break;
    default:
        month = "Некорректный месяц";
}

console.log(month);
