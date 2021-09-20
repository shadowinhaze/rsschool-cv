const myPhoto = document.querySelector('#my_photo').childNodes[1]

myPhoto.addEventListener('click', () => {
    myPhoto.src = (myPhoto.src.includes('memoji.png')) ? myPhoto.src.replace(/memoji/i, 'photo_rep') : myPhoto.src.replace(/photo_rep/i, 'memoji');
})


// burger

const burger = document.querySelector('.burger_icon');

burger.addEventListener('click', e => {
    document.querySelector('.header').classList.toggle('collapsed');
    document.querySelector('.footer').classList.toggle('visible');
})


// message
const message = `
Total: 125
* Вёрстка валидная +10
* Вёрстка семантическая +20
  [article, figure, footer, header, main, nav, section, h1-h4]. h1 => 1.
* Для оформления СV используются css-стили +10
* Контент центрирован +10
* Адаптив +5
* Своё меню (можно посмотреть на разных экранах) +5
* Есть аватарка, обязательно кликните по ней)) +10
* Куча списков ul > li +10
* CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
* CV содержит пример вашего кода +10
* Проекты +5
* En версия +10

* ссылка на PR, чтобы не искали: https://github.com/shadowinhaze/rsschool-cv/pull/4#issue-697341101  +10

`

console.log(message)