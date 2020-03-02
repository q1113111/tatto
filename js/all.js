var onerrorCallback, onloadCallback;
function mapApiPrepared() {
    return new Promise((resolve, reject) => {
        onerrorCallback = function () {
            reject(false)
        }
        onloadCallback = function () {
            resolve(true)
        }
    })
}
const mapApiResponse = mapApiPrepared()


function getData(pagename) {
    var req = new XMLHttpRequest();
    if (pagename == null) {
        pagename = "blog-fullwidth.html";
    }
    req.open("get", pagename);
    console.log(pagename);
    req.onload = function () {
        var content = document.getElementById("content");
        content.innerHTML = this.responseText;
        activePage(pagename);

    };
    req.send();
};




function activePage(pagename) {
    switch (pagename) {
        case 'product.html':
            fancy();
            break;
        case 'product-2.html':
            product();
            break;
        case 'about.html':
            about();
            break;
        case 'FAQ.html':
            faq();
            break;
        case 'shopcar.html':
            shop();
            break;
        case 'contact.html':
            mapApiResponse.then(function () {
                initMap()
            }, function () {
                console.log("Map api load failed")
            })
            break;
        default:
            return;

    }
}
function getlink() {
    $(".js-getlink").click(function () {
        var linkvar = $(this).attr("data-link");
        console.log(linkvar);
        localStorage.setItem("link", JSON.stringify(linkvar));
    });
}


function banner() {
    $('.carousel__prev label').click(function () {
        var index = $(this).index()
        console.log(index)
        $('.carousel__item').removeClass('active')
        $('.carousel__item').eq(index).addClass('active')
    })
    $('.carousel__next label').click(function () {
        var index = $(this).index()
        console.log(index)
        $('.carousel__item').removeClass('active')
        $('.carousel__item').eq(index).addClass('active')
    })

    $('.carousel__item').eq(0).addClass('active')

}






function toggle() {
    $(".fa-bars").click(function () {
        $(".nav").fadeIn(1000);
        $(".footer").fadeIn(1000);
        $(".fa-bars").fadeOut(500);
        $(".fa-skull").fadeIn(1000);
    })
    $(".fa-skull").click(function () {
        $(".nav").fadeOut(1000);
        $(".footer").fadeOut(1000);
        $(".fa-skull").fadeOut(500);
        $(".fa-bars").fadeIn(1000);
    });

    $('.js-nav-click a').on('click', function () {
        $(this).parent().siblings().removeClass('active')
        $(this).parent().addClass('active')
        $(this).parent().find('.menu').slideToggle();


        $(this).parent().siblings().find('.menu').slideUp()


    })
    $('.js-navbar a').click(function () {
        $(this).parent().find('.menu').slideToggle();
        $(this).parent().siblings().find('.menu').slideUp();
    });

}
function faq() {


    $('.js-question li strong').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');


    })
    $('.select li').click(function () {
        var i = $(this).children().attr("href");


        $('html,body').animate({
            scrollTop: $(i).offset().top
        }, 800);
    })


    $(window).scroll(function () {

        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

        if (scrollBottom < 500) {
            $('.select').addClass('active')
        }
        else {
            $('.select').removeClass('active')
        }
    })


}


function masonry() {
    $('.box').masonry({
        itemSelector: '.box-item'

    });

}
function arrowHide() {
    $(window).scroll(function () {
        var bannerHeight = $('.js-banner').height()
        console.log(bannerHeight);
        console.log('scroll', $(this).scrollTop());
        if ($(this).scrollTop() > 500) {
            $('.arrow').fadeIn()
        } else {
            $('.arrow').fadeOut()
        }
    })
}

function arrow() {

    $(".arrow").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });

}

function fancy() {
    $("a.single_image").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });
}

function product() {
    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        autoplay: {
            delay: 1500,
          },
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper('#swiper-container', {
        effect: 'coverflow',
        autoplay: {
            delay: 1000,
          },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });





};
function about() {
    var swiperabout = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

function shop() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    $(".fancybox").fancybox({

        openEffect: 'none',
        closeEffect: 'none'
    });
}
function initMap() {
    var location = { lat: 24.149830, lng: 120.679730 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]

    }
    );
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
// jQuery.noConflict();
(function ($) {
    $(function () {
        
        banner();
        setTimeout(function () {
            masonry();
        }, 800)
        arrow();
        arrowHide();
        toggle();
        getlink();

    });


})(jQuery)

    // $(".h1").hide().delay(200).fadeIn(1500);
    // $(".h2").hide().delay(200).fadeIn(1500);
    // $(".carousel__next").click(function () {
    //     banner();
    // })

    // $(".carousel__prev").click(function () {
    //     banner();
    // })




//  $(".carousel__next").click(function () {
//         $(".h1").hide();
//         $(".h2").hide();
//     });
//     $(".carousel__prev").click(function () {
//         $(".h1").fadeIn(2000);
//         $(".h2").fadeIn(2000);
//     });
//     $(".carousel__prev").click(function () {
//         $(".h1").hide();
//         $(".h2").hide();
//     });
//     $(".carousel__next").click(function () {
//         $(".h1").fadeIn(2000);
//         $(".h2").fadeIn(2000);
//     });

