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
/*
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
        alert ('Тупой гринго')
    }    */

    /*
let yearSeasons = prompt('Введите месяц', '');
    if (yearSeasons == 'сентябрь') {
        alert('осень1');
    } else if (yearSeasons == 'октябрь') {
        alert('осень2');
    } else if (yearSeasons == 'ноябрь') {
        alert('осень3');
    } else if (yearSeasons == 'декабрь') {
        alert ('зима 1')
    } else if (yearSeasons == 'январь') {
        alert ('зима 2');
    } else if (yearSeasons == 'февраль') {
        alert ('зима 3');
    } else if (yearSeasons == 'март') {
        alert ('весна 1');
    } else if (yearSeasons == 'апрель') {
        alert ('весна 2');
    } else if (yearSeasons == 'май') {
        alert ('весна 3');
    } else if (yearSeasons == 'июнь') {
        alert ('лето 1');
    } else if (yearSeasons == 'июль') {
        alert ('лето 2');
    } else if (yearSeasons == 'август') {
        alert ('лето 3');
    } else {
        alert ('Ну ты тупой гринго!');
    } 
*/
/*
let hour = prompt('Введите время', '');
    if (hour < 8 || hour > 17) {
        alert ('Да ты тупой Я поглаяжу! Кто работает в это время?');
    } else {
        alert ('наши двери открыты!');
    }
*/

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

