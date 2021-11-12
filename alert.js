'use strict';

/*
function calc (math, a, b){
    if (math == 'sum') {
        console.log (a + b);
    }
    if (math == 'sub') {
        console.log (a-b);
    }
    if (math == 'div') {
        if (b == 0){
            console.log ('На ноль делить нельзя сука!')
        } else {
            console.log (a/b);
        }
        
    }
    if (math == 'multi') {
        console.log (a*b);
    }
}
*/

// calc('sum', 3, 3);
// calc('sub', 3, 2);
// calc('div', 6, 2);
// calc('multi', 2, 2);
// calc('div', 2, 0);

// написать программу которая проверят что ты совершеннолетний
// написать программу которая проверят время года
// написать программу которая проверят рабочие часы

/*
let age = prompt('Сколько тебе мазафака лет?', '');
    if (age < 18) {
        alert('Не дорос еще поцик');
    } else {
        alert ('Добро пожаловать мразишь!');
    }
*/

let yearSeasons = prompt('Введите месяц', '');
    if (yearSeasons == 'сентябрь' || 'октябрь' || 'ноябрь' ) {
        alert ('Осень');
    } else if (yearSeasons == 'декабрь' || 'январь' || 'февраль') {
        alert ('Зима');
    } else if (yearSeasons == 'март' || 'апрель' || 'май') {
        alert ('Весна');
    } else if (yearSeasons == 'июнь' || 'июль' || 'август') {
        alert ('Лето');
    } else {
        alert ('Тупой гринго');
    }   
    

