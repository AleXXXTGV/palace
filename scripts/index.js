let burger = document.querySelector('.burger')

burger.onclick = () => {
    burger.classList.toggle('burger_active')
    document.querySelector('.header-mobile__modal').classList.toggle('header-mobile__modal_active')
}