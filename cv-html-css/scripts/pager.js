const pageSwitchers = document.querySelectorAll('.main_navigation__item');
const pages = document.querySelectorAll('.main__page_content');
let pageSwitcherName,
    pageName;

pageSwitchers.forEach( switcher => {
    switcher.addEventListener('click', () => {
        pageSwitchers.forEach(e => e.classList.remove('active'));
        switcher.classList.add('active');
        pageSwitcherName = switcher.firstChild.getAttribute('data-for-page');
        pages.forEach( page => {
            pageName = page.getAttribute('data-page');
            console.log(pageSwitcherName, pageName)
            if (pageName === pageSwitcherName) {
                page.classList.add('is-active')
            } else {
                page.classList.remove('is-active');
            }
        })
    })
})