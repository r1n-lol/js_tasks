// Задание 8: Создать матрицу 3x3, вывести её в виде таблицы в консоли.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i < matrix.length; i++){
    let row = "";
    for(let j = 0; j < matrix[i].length; j++){
        row += matrix[i][j] + " ";
    }
    console.log(row);
}