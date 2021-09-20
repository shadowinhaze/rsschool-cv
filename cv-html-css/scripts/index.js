const myPhoto = document.querySelector('#my_photo').childNodes[1]


myPhoto.addEventListener('click', () => {
    (myPhoto.src.includes('memoji.png')) ? myPhoto.src = myPhoto.src.replace(/memoji/i, 'photo_rep') : myPhoto.src = myPhoto.src.replace(/photo_rep/i, 'memoji');
})