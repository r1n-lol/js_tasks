// Задание 4: Создайте два массива и объедините их в один, используя цикл.

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let metgesArray = [];
for(let i = 0; i < array1.length; i++){
    metgesArray.push(array1[i]);
}

for(let i = 0; i < array2.length; i++){
    metgesArray.push(array2[i]);
}

console.log(metgesArray);