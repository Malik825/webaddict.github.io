(() => {
    var typed2 = new Typed('.text', {
        strings: ["<strong>Photographer</strong>", "<strong  class='primary-color'>Developer</strong>", "<strong>Designer</strong>", "<strong>Student</strong>"],
        typeSpeed: 50,
        backSpeed: 50,

        loop: true
    });
})();
(() => {

    var containerEl = document.querySelector('#portfolio');

    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(200ms)' // Set a 'stagger' effect for the loading animation
        },
        load: {
            filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
        }
    });

    // Add a class to the container to remove 'visibility: hidden;' from targets. This
    // prevents any flickr of content before the page's JavaScript has loaded.

    containerEl.classList.add('mixitup-ready');

    // Show all targets in the container

    mixer.show()
        .then(function() {
            // Remove the stagger effect for any subsequent operations

            mixer.configure({
                animation: {
                    effects: 'fade scale'
                }
            });
        });

    // WebGLSampler.registerplugin(ScrollTrigger)
})();
(() => {
    let workItems = document.querySelectorAll('.work-item');
    workItems.forEach(workItem => workItem.addEventListener('mouseenter', e => {
        workItems.forEach(remove => {
            remove.classList.remove('active')
        })
        workItem.classList.add('active')
    }))
})();

(() => {
    window.addEventListener('scroll', (scrolled) => {
        let header = document.querySelector('header');
        header.classList.toggle('fixed', scrollY > 150);
    })
})();

(() => {
    let hamburgerBtn = document.querySelector('.hamburger');
    let navigationBar = document.querySelector('.navigation');
    let navLinks = document.querySelectorAll('.navigation .nav li a');
    let closeNav = document.querySelector('.closeNav');
    hamburgerBtn.onclick = () => {
        hamburgerBtn.animate({
            right: '200px',
        }, 100)
        navigationBar.classList.add('active')
    }
    closeNav.onclick = () => {
        navigationBar.classList.remove('active')
    }
    navLinks.forEach((link) => link.addEventListener('click', targetedLink => {
        navLinks.forEach(currentLink => {
            currentLink.classList.remove('active');
        })
        link.classList.add('active');
    }))
})();
(() => {
    const responsive = {
        0: {
            items: 1
        },
        320: {

            items: 1
        },
        560: {
            items: 1
        },
        767: {
            items: 2
        },
        960: {
            items: 2
        },

        1000: {
            items: 3
        }
    }

    $('#team-slider').owlCarousel({


        loop: true,
        nav: false,
        dots: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive,

        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,

    })
    $('#testi_slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        infinite: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],

    })

    $(window).on('scroll', e => {
        $('section').each(function(e) {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let top = $(window).scrollTop();

            if (top > offset && top < offset + height) {
                $('header ul li a').removeClass('active')
                $('header').find(`[href="#${id}"]`).addClass('active');
            }

        });
    })
})();
