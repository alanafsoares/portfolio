/* Swiper */
const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  PointerEvent: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true
  },

  // if we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',

    prevEl: '.swiper-button-prev'
  }
})

/* Scroll Reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
})

scrollReveal.reveal(
  `.experience-text, .site, #education .experience-text, .education-text, .education-list, .education-extra,
  #contact .footer-text, .social-text, .social-media, .footer-copy
  `,
  { interval: 200 }
)

/* Back to top btn */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  ScrollReveal().Reveal('#signup', { reset: true })
})

/* Particles JS */

window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 200,
    sizeVariations: 3,
    speed: 0.5,
    color: ['#bdc3c7', '#95a5a6','#7f8c8d', '#34495e'],
    minDistance: 100,
  })
}

