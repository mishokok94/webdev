"use strict";

/* "use stirct" 
/* Задание на урок:
console.log(`https://someurl.com/${category}/5`);
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
const user = "Mikle";
Проверить, чтобы все работало без ошибок в консоли */

 
/* 1 */

let numberOffFilms ;


function start() {
    numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
        numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
 start(); 

const personalMovieDB = {
    count: numberOffFilms,
    movies: {},
    actors: {},
    generes:[],
    privat: true


};

function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '' ),
          b = prompt('На сколько оцените его?','');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();



function directPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Посмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

 directPersonalLevel();




function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(generes){
    for( let i = 1; i <= 3; i++) {        
        personalMovieDB.generes[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/