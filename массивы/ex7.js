// Задание 7: Дан массив строк let strings = ["apple", "banana", "cherry", "kiwi", "strawberry", "melon"];, оставить только те, которые длиннее 5 символов.

let strings = ["apple", "banana", "cherry", "kiwi", "strawberry", "melon"];
let longString = [];

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > 5) {
    longString.push(strings[i]);
  }
}

console.log(longString);
