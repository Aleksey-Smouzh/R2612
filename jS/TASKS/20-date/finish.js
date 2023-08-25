/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */
const time = new Date();
console.log(time.getMilliseconds());

const Ntime = time.getUTCFullYear()
console.log(Ntime.toString());