export const handleFooterFormSubmit = () => {
    const btnSubmit = document.querySelector('.subscribe__btn')

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
    })
}

export const testimonialsTextSwap = () => {
    const testimonial5 = document.querySelector(
        '.testimonials__card--5 > .testimonials__text',
    )
    const testimonial6 = document.querySelector(
        '.testimonials__card--6 > .testimonials__text',
    )

    if (testimonial5 && testimonial6) {
        if (window.innerWidth < 1600 && window.innerWidth > 999) {
            testimonial5.innerHTML =
                '<p> Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.</p><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'

            testimonial6.innerHTML =
                '<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
        }
        if (window.innerWidth <= 999 && window.innerWidth >= 640) {
            testimonial5.innerHTML =
                '<p> My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'

            testimonial6.innerHTML =
                '<p>Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. </p> <p> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
        }
        if (window.innerWidth <= 639) {
            testimonial5.innerHTML =
                '<p>My son delighted very much ljves to watch.... gouillas.The best online zoo I’ ve met.  Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. </p>'

            testimonial6.innerHTML =
                '<p>Best online zoo I’ve met. My son delighted very much ljves to watch.... gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1600 && window.innerWidth > 999) {
                testimonial5.innerHTML =
                    '<p> Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.</p><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'

                testimonial6.innerHTML =
                    '<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
            }
            if (window.innerWidth <= 999 && window.innerWidth >= 640) {
                testimonial5.innerHTML =
                    '<p> My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'

                testimonial6.innerHTML =
                    '<p>Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. </p> <p> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
            }
            if (window.innerWidth <= 639) {
                testimonial5.innerHTML =
                    '<p>My son delighted very much ljves to watch.... gouillas.The best online zoo I’ ve met.  Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. </p>'

                testimonial6.innerHTML =
                    '<p>Best online zoo I’ve met. My son delighted very much ljves to watch.... gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p> <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p>'
            }
        })
    }
}

export const handleModal = () => {
    // const modalsArr = document.querySelectorAll('.modal')
    const burgerBtn = document.querySelector('.burger')

    const modalMenu = document.querySelector('.modal--menu')
    const modalMenuClose = document.querySelector('.modal__close')

    burgerBtn.addEventListener('click', () => {
        modalMenu.classList.add('active')
        document.body.classList.add('fixed')
    })

    modalMenuClose.addEventListener('click', () => {
        modalMenu.classList.remove('active')
        document.body.classList.remove('fixed')
    })

    window.addEventListener('click', (e) => {
        if (e.target === modalMenu) {
            document.body.classList.remove('fixed')
            modalMenu.classList.remove('active')
        }
    })
}

export const handlePriceDotsClick = () => {
    const dots = document.querySelectorAll('.progressbar__dot')
    const input = document.querySelector('.donate__input')

    if (dots) {
        const clearDots = () => {
            dots.forEach((dot) => dot.classList.remove('active'))
        }
        dots.forEach((dot) =>
            dot.addEventListener('click', () => {
                clearDots()
                dot.classList.add('active')
                const pseudo = window.getComputedStyle(dot, ':after').content

                let pseudoValue = pseudo.split('')

                pseudoValue.splice(0, 2)
                pseudoValue.splice(-1, 1)
                pseudoValue = pseudoValue.join('')

                input.value = pseudoValue
            }),
        )

        input.addEventListener('input', () => {
            console.log('changed')
            dots.forEach((dot) => {
                const pseudo = window.getComputedStyle(dot, ':after').content

                let pseudoValue = pseudo.split('')

                pseudoValue.splice(0, 2)
                pseudoValue.splice(-1, 1)
                pseudoValue = Number(pseudoValue.join(''))

                if (input.value == pseudoValue) {
                    console.log(pseudoValue)
                    clearDots()
                    dot.classList.add('active')
                }
            })
        })
    }
}
