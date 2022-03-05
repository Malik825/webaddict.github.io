(() => {
    var typed2 = new Typed('.text', {
        strings: ["<strong>Photographer</strong>", "<strong  class='primary-color'>Developer</strong>", "<strong>Designer</strong>", "<strong>Student</strong>"],
        typeSpeed: 50,
        backSpeed: 50,

        loop: true
    });
    var typed3 = new Typed('.text2', {
        strings: ["<strong>Photographer</strong>", "<strong  class='primary-color'>Javascript Developer</strong>", "<strong>Ui/Ux Designer</strong>", "<strong>Student Developer.</strong>"],
        typeSpeed: 50,
        backSpeed: 50,

        loop: true
    });
})();
(() => {
    let serviceModal = document.querySelectorAll('.serviceDetails');
    let openModalBtns = document.querySelectorAll('.learnMore');
    let closeServiceModals = document.querySelectorAll('.fa-times');

    var modal = (modalClick) => {
        serviceModal[modalClick].classList.add('active')
    }
    openModalBtns.forEach((learnMoreBtn, i) => {
        learnMoreBtn.addEventListener('click', e => {
            e.preventDefault();
            modal(i);
        })
    })
    closeServiceModals.forEach((closeModal, i) => {
        closeModal.addEventListener('click', e => {
            serviceModal.forEach((modalView) => {
                modalView.classList.remove('active')
            })
            closeModal.classList.add('active');
        })
    })
})();

(() => {
    let portfolioModal = document.querySelectorAll('.portfolioDetails');
    let openModalImages = document.querySelectorAll('.portfolio-image');
    let closePortfolioModals = document.querySelectorAll('.fa-times');

    var portfolioToggler = (portfolioModalClick) => {
        portfolioModal[portfolioModalClick].classList.add('active');
    }
    openModalImages.forEach((image, i) => {
        image.addEventListener('click', (e) => {
            portfolioToggler(i);
        })
    })
    closePortfolioModals.forEach((closePortfolioModal, i) => {
        closePortfolioModal.addEventListener('click', e => {
            portfolioModal.forEach((modalView) => {
                modalView.classList.remove('active')
            })
            closePortfolioModal.classList.add('active');
        })
    })

})();

(() => {
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', e => {
        document.body.classList.toggle('dark-theme');
        themeBtn.classList.toggle('sun');

        localStorage.setItem('saved-theme', getCurrentTheme());
        localStorage.setItem('saved-icon', getCurrentIcon());

    })
    const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light"
    const getCurrentIcon = () => document.body.classList.contains('sun') ? "sun" : "moon";
    const savedTheme = localStorage.getItem('saved-theme');
    const savedIcon = localStorage.getItem('saved-icon');
    if (savedTheme) {
        document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
        themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
    }
})();

(() => {
    let navigation = document.querySelector('.navigation');
    let hamburger = document.querySelector('.hamburger');
    let closeNav = document.querySelector('.closeNav');
    let navigationLinks = document.querySelectorAll('.navigation ul li a');
    hamburger.addEventListener('click', openNav);
    closeNav.addEventListener('click', closeOpenedNav);

    function openNav() {
        navigation.classList.add('active');
        document.body.classList.add('active')
    }

    function closeOpenedNav() {
        navigation.classList.remove('active')
        document.body.classList.remove('active')
    }
    navigationLinks.forEach((link) => link.addEventListener('click', e => {
        // e.preventDefault();
        document.body.classList.remove('active')
        navigation.classList.remove('active')

    }))

})();

(() => {

    window.addEventListener('scroll', e => {
        let header = document.querySelector('header');
        header.classList.toggle('fixed', scrollY > 150);
        // closeOpenedNav();
        // let section = document.querySelectorAll('section');
        // section.forEach((current) => {
        //     let scrollY = window.pageYOffset;
        //     let sectionHeight = current.offsetHeight;
        //     let sectionTop = current.offsetTop - 50;
        //     let id = current.getAttribute('id');

        //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        //         document.querySelector('.navigation ul li a[href*="]').classList.add('active');
        //     }
        // })

    })
})();
$(() => {
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
            items: 2
        }
    }

    $('#testi-slider').owlCarousel({


        loop: true,
        nav: true,
        dots: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive,

        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,

    })

    $('section').each(function(e) {

        let height = $(this).height();
        let offset = $(this).offset().top - 50;
        let id = $(this).attr('id');
        let top = $(window).scrollTop();

        if (top > offset && top < offset + height) {
            $('header ul li a').removeClass('active')
            $('header').find(`[href="#${id}"]`).addClass('active');
        }

    });
    $(".scrollTop i").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 300)
    })

    $(window).scroll(function() {
        $('.navigation').removeClass('active');
        let heroHeight = $('.home').height();
        let yposition = $(document).scrollTop();


        if (heroHeight <= yposition) {
            $('.scrollTop').addClass('wows')

        } else {
            $('.scrollTop').removeClass('wows')
        }

    })

})
document.addEventListener("DOMContentLoaded", function() {
    startplayer();
}, false);
var player;

function startplayer() {
    player = document.getElementById('video_player');
    player.controls = false;
}

function play_vid() {
    player.play();
    // document.querySelector('.fa-play').classList.add("fa-pause");
    // document.querySelector('.fa-play').classList.remove("fa-play");
}

function pause_vid() {
    player.pause();
}

function stop_vid() {
    player.pause();
    player.currentTime = 0;
}

function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}
let slider = document.querySelector('#duration_slider');

function durationSlider() {
    slider_position = player.duration * (slider.value / 100);
    player.currentTime = slider_position;
    // playsong()
    // alert('worked')
}


document.querySelector('.playBtn').addEventListener('click', e => {
    document.querySelector('.videoContent').classList.add('open')
    player.pause();
    player.currentTime = 0;
})
document.querySelector('.closeItem').addEventListener('click', e => {
    document.querySelector('.videoContent').classList.remove('open')

    // pause_vid()
})