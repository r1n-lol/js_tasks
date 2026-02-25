// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, и false — если хотя бы одно свойство есть.
// Функция должна работать для любых объектов, включая те, что были созданы только что.

let obj = {}
function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
};

console.log(obj)
 console.log(isEmpty(obj));

