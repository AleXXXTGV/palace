let burger = document.querySelector('.burger')

burger.onclick = () => {
    burger.classList.toggle('burger_active')
    document.querySelector('.header-mobile__modal').classList.toggle('header-mobile__modal_active')
}

let languages = document.querySelector('.languages')
languages.onclick = () => {
    languages.classList.toggle('languages_active')
    let et = event.target

}

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



let roomInnerFuncinal = () => {
    let imgPaginationButtons = document.querySelectorAll('.roomImgBackgroundPagination')
    let arr = []

    for (let imgPaginationButton of imgPaginationButtons) {
        arr.push(imgPaginationButton)

        imgPaginationButton.onclick = () => {
            let et = event.target

            for (let i of et.parentElement.previousElementSibling.children) {
                i.classList.remove('roomImgBackground_active')
            }
            for (let i of et.parentElement.children) {
                i.classList.remove('roomImgBackgroundPagination_active')
            }
            et.classList.add('roomImgBackgroundPagination_active')
            count = et.getAttribute('value')
            et.parentElement.previousElementSibling.children[et.getAttribute('value')].classList.add('roomImgBackground_active')
        }
    }
    let filteredImgPaginationButtons = arr.filter(item => item.getAttribute('value') == 0)
    for (let filteredImgPaginationButton of filteredImgPaginationButtons) {
        let count = 0
        for (let i of filteredImgPaginationButton.parentElement.previousElementSibling.children) {
            i.onclick = () => {
                if (count == 2) {
                    count = 0
                } else count++
                i.classList.remove('roomImgBackground_active')
                for (let i2 of filteredImgPaginationButton.parentElement.previousElementSibling.children) {
                    i2.classList.remove('roomImgBackground_active')
                }
                for (let i2 of filteredImgPaginationButton.parentElement.children) {
                    i2.classList.remove('roomImgBackgroundPagination_active')
                }
                filteredImgPaginationButton.parentElement.children[count].classList.add('roomImgBackgroundPagination_active')
                filteredImgPaginationButton.parentElement.previousElementSibling.children[count].classList.add('roomImgBackground_active')
            }
        }
        setInterval(() => {
            for (let i of filteredImgPaginationButton.parentElement.previousElementSibling.children) {
                i.classList.remove('roomImgBackground_active')
            }
            for (let i of filteredImgPaginationButton.parentElement.children) {
                i.classList.remove('roomImgBackgroundPagination_active')
            }
            filteredImgPaginationButton.parentElement.children[count].classList.add('roomImgBackgroundPagination_active')
            filteredImgPaginationButton.parentElement.previousElementSibling.children[count].classList.add('roomImgBackground_active')
            count++
            if (count > 2) {
                count = 0
            }
        }, 5000);
    }

    let room__face_front_info_buttons = document.querySelectorAll('.room__face_front-info')

    for (let room__face_front_info_button of room__face_front_info_buttons) {
        room__face_front_info_button.onclick = () => {
            let et = event.target.parentElement.parentElement.parentElement
            et.classList.toggle('isFlipped')
            et.children[0].classList.toggle('room__face_front_active')
            et.children[1].classList.toggle('room__face_back_active')
        }
    }
    let room_close_buttons = document.querySelectorAll('.room_close')

    for (let room_close_button of room_close_buttons) {
        room_close_button.onclick = () => {
            let et = event.target.parentElement.parentElement.parentElement
            et.classList.remove('isFlipped')
            et.children[0].classList.remove('room__face_front_active')
            et.children[1].classList.remove('room__face_back_active')
        }
    }
}
let rooms__categories_mobile = document.querySelectorAll('.rooms__category_mobile')
let rooms__categories = document.querySelectorAll('.rooms__category')
let mainSwiperWrapper = document.querySelector('.roomsSlider')
let swiperWrapper = document.querySelector(".swiper-wrapper")
let roomsFromHTML = document.querySelectorAll('.roomSlide')
let createRoomsSwiper = () => {
    new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            800: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
            },
        },


    });
}

new Swiper(".reviewsSlider", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            nextEl: ".reviewsNext",
            prevEl: ".reviewsPrev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            800: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
            },
        },


    });

let roomsArr = []
for (let roomFromHTML of roomsFromHTML) {
    let newRoomInArr = {
        type: roomFromHTML.getAttribute('id'),
        html: roomFromHTML.outerHTML
    }
    roomsArr.push(newRoomInArr)
}
let rooms__category_mobile_text = document.querySelector('.rooms__category_mobile_text')
let rooms__categories_mobile_wrapper = document.querySelector('.rooms__categories_mobile')
rooms__categories_mobile_wrapper.onclick = () => {
    let rooms__categories_mobile_chips = document.querySelector('.rooms__categories_mobile-chips')
    rooms__categories_mobile_chips.classList.toggle('rooms__categories_mobile-chips_active')
    rooms__category_mobile_text.classList.toggle('rooms__category_mobile_active')
}
let createItems = (type) => {
    mainSwiperWrapper.innerHTML = ``
    let newSwiperDiv = document.createElement('div')
    newSwiperDiv.classList.add('swiper', 'mySwiper')
    swiperWrapper.innerHTML = ``
    let roomsHTML = ``
    if (type == 'all') {
        for (let room of roomsArr) {
            roomsHTML += room.html
        }
        rooms__category_mobile_text.innerHTML = `All rooms <img
        src="./img/arrow_t.svg" alt="arrow_t" class="rooms__categoryImg">`

    } else {
        for (let room of roomsArr) {
            if (room.type == type) {
                roomsHTML += room.html
            }
        }
        rooms__category_mobile_text.innerHTML = `${type} <img
        src="./img/arrow_t.svg" alt="arrow_t" class="rooms__categoryImg">`
    }
    swiperWrapper.innerHTML = roomsHTML
    swiperWrapper.style.transform = 'translate3d(0px, 0px, 0px)'
    newSwiperDiv.append(swiperWrapper)
    mainSwiperWrapper.append(newSwiperDiv)
    createRoomsSwiper()
    roomInnerFuncinal()
}
createItems('all')
roomInnerFuncinal()

for (let rooms__category of rooms__categories) {
    rooms__category.onclick = () => {

        let et = event.target
        for (let rooms__category2 of rooms__categories) {
            rooms__category2.classList.remove('rooms__category_active')
        }
        et.classList.add('rooms__category_active')
        createItems(et.getAttribute('id'))
    }
}
for (let rooms__category of rooms__categories_mobile) {
    rooms__category.onclick = () => {

        let et = event.target
        for (let rooms__category2 of rooms__categories_mobile) {
            rooms__category2.classList.remove('rooms__category_active')
        }
        et.classList.add('rooms__category_active')
        createItems(et.getAttribute('id'))
    }
}

new Swiper(".mySwiper2", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" value="' + index + '" >' + "</span>";
        },
    },
    navigation: {
        nextEl: ".attraction_next",
        prevEl: ".attraction_prev",
    },
});
new Swiper(".attractions__mobileSlider", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" value="' + index + '" >' + "</span>";
        },
    },
    navigation: {
        nextEl: ".attraction_next",
        prevEl: ".attraction_prev",
    },
});



let attractionsPaginationsBtns = document.querySelectorAll('.swiper-pagination-bullet')
let swiper_attractions_pagination_modalPC = document.querySelector('.swiper-attractions-pagination-modalPC')
let attractions_navigation_buttons = document.querySelectorAll('.attractions-navigation-button')
let modalChangeableElements = document.querySelectorAll('.modalChangeableElement')
let activeAttractionsPaginationsBtn;
let changeAttractionModalText = () => {
    setTimeout(() => {
        activeAttractionsPaginationsBtn = document.querySelector('.swiper-pagination-bullet-active')
        for (let modalChangeableElement of modalChangeableElements) {
            if (modalChangeableElement.getAttribute('value') == activeAttractionsPaginationsBtn.getAttribute('value')) {
                modalChangeableElement.removeAttribute('hidden')
            } else modalChangeableElement.setAttribute('hidden', 'hidden')
        }
    }, 0);
}

for (let attractionsPaginationsBtn of attractionsPaginationsBtns) {
    attractionsPaginationsBtn.onclick = () => {
        changeAttractionModalText()
    }
}
for (let attractions_navigation_button of attractions_navigation_buttons) {
    attractions_navigation_button.onclick = () => {
        changeAttractionModalText()
    }
}
setInterval(() => {
    changeAttractionModalText()
}, 0);
if (window.outerWidth > 768) {

    let changeAttractionModalPosition = () => {
        setTimeout(() => {
            activeAttractionsPaginationsBtn = document.querySelector('.swiper-pagination-bullet-active')
            if (activeAttractionsPaginationsBtn.getAttribute('value') == 0) {
                swiper_attractions_pagination_modalPC.style.top = `${90}px`
            } else if (activeAttractionsPaginationsBtn.getAttribute('value') == 1) {
                swiper_attractions_pagination_modalPC.style.top = `${185}px`
            } else if (activeAttractionsPaginationsBtn.getAttribute('value') == 2) {
                swiper_attractions_pagination_modalPC.style.top = `${285}px`
            } else if (activeAttractionsPaginationsBtn.getAttribute('value') == 3) {
                swiper_attractions_pagination_modalPC.style.top = `${385}px`
            } else if (activeAttractionsPaginationsBtn.getAttribute('value') == 4) {
                swiper_attractions_pagination_modalPC.style.top = `${480}px`
            }
        }, 0);
    }

    for (let attractionsPaginationsBtn of attractionsPaginationsBtns) {
        attractionsPaginationsBtn.onclick = () => {
            changeAttractionModalText()
            changeAttractionModalPosition()
        }
    }
    for (let attractions_navigation_button of attractions_navigation_buttons) {
        attractions_navigation_button.onclick = () => {
            changeAttractionModalText()
            changeAttractionModalPosition()
        }
    }
    setInterval(() => {
        changeAttractionModalText()
        changeAttractionModalPosition()
    }, 0);
}
