import * as str from "./stringUtils.js";

const text = "hello world";

console.log("Исходная строка:", text);
console.log("С заглавной буквы:", str.capitalize(text));
console.log("Перевёрнутая строка:", str.reverse(text));
console.log("Гласные буквы:", str.VOWELS);