import * as customFunctions from './modules/functions.js'

// vendors
// swiper slider
import Swiper, { Pagination } from 'swiper'

const swiper = new Swiper('.swiper--testimonials ', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,
    spaceBetween: 30,

    modules: [Pagination],
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
})
