const swiper = new Swiper('.promo-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 3000,
    },
    speed: 500,
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },
  });