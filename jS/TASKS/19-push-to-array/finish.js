/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const as = [123, "bum", null, true]
as.push (222, 90)

console.log(as.length)
as.forEach((e) => console.log(e))