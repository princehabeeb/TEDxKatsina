function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = 'close', list.classList.add('top-[80px]'),
    list.classList.add('opacity-100'))
     :( e.name = 'menu', list.classList.remove('top-[80px]'),
     list.classList.remove('opacity-100'));
}

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if ( window.pageYOffset > 200 ){
        nav.classList.add('nav-dark')
    }else{
        nav.classList.remove('nav-dark')
    }
})