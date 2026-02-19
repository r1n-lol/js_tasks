// Задание 3:  Создайте массив чисел и выведите только четные числа.

let array = [1,2,5,6,78,9,23,45];

for(let i = 0; i <= array.length; i++){
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }
}