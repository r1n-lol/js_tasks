// Создайте модуль stringUtils.js, который экспортирует:
// функцию capitalize(str) – возвращает строку с заглавной первой буквой;
// функцию reverse(str) – возвращает перевёрнутую строку;
// константу VOWELS – массив гласных букв.
// В главном файле импортируйте всё через import * as str и продемонстрируйте работу.


export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const reverse = str =>
  str.split("").reverse().join("");

export const VOWELS = ["a", "e", "i", "o", "u"];