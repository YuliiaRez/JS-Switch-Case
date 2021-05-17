/*1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result
 запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.*/
function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
const result = randomInteger(3) + 1;
switch (result) {
    case 1: console.log(`${result} corresponds 'Winter'.`);
        break;
    case 2: console.log(`${result} corresponds'Spring' . `);
        break;
    case 3: console.log(`${result} corresponds 'Summer' .`);
        break;
    case 4: console.log(`${result} corresponds 'Autumn' .`);
}
/*2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года
попадает этот месяц (зима, лето, весна, осень).*/

function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
const result1 = randomInteger(11) + 1;
switch (result1) {
    case 12:
    case 1:
    case 2: console.log(`${result1} month corresponds 'Winter'.`);
        break;
    case 3:
    case 4:
    case 5: console.log(`${result1} month corresponds'Spring' . `);
        break;
    case 6:
    case 7:
    case 8: console.log(`${result1} month corresponds 'Summer' .`);
        break;
    case 9:
    case 10:
    case 10:
        console.log(`${result1} month corresponds 'Autumn' .`);
};

/*3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название
(например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)*/
const numDayOfWeek = +prompt("Input the number for any day in Britain week");
switch (numDayOfWeek) {
    case 1: console.log(`${numDayOfWeek} is for Sunday.`);
        break;
    case 2: console.log(`${numDayOfWeek} is for Monday.`);
        break;
    case 3: console.log(`${numDayOfWeek} is for Tuesday.`);
        break;
    case 4: console.log(`${numDayOfWeek} is for Wednesday.`);
        break;
    case 5: console.log(`${numDayOfWeek} is for Thursday.`);
        break;
    case 6: console.log(`${numDayOfWeek} is for Friday.`);
        break;
    case 7: console.log(`${numDayOfWeek} is for Saturday.`);
        break;
    default: console.log(`${numDayOfWeek} is not a number for day of week.`);
};

/*4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает
это число (в первую, вторую или третью).*/

/*******Лениво было перечислять все дни декады )))******/
const day = randomInteger(31);
switch (true) {
    case (day <= 10): console.log(`${day} is in first decade.`);
        break;
    case (day <= 20) && (day > 10): console.log(`${day} is in second decade.`);
        break;
    case (day > 20): console.log(`${day} is in third decade.`);
        break;
}