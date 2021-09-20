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


