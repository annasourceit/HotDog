
;(function ($) {
    "use strict";
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
        /*-----------Mobile menu-----------*/
        $(".mobMenu").click(function () {
            $(".menu").toggleClass("menu--active");
        });
    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function (e) {
        /*-----------Mobile menu-----------*/
        if (window.innerWidth > 768) {
            $('.menu').removeClass('menu--active');
        }

    });
})(jQuery); // Fully reference jQuery after this point.

function makeFormRequest() {
    let httpRequest;
    document.querySelector(".form__msgSubmit").style.display = "none";

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else { // IE
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState != 4) return;
        if (httpRequest.status != 200 && httpRequest.status != 201) {
            // обработать ошибку
            alert(httpRequest.status + ': ' + httpRequest.statusText);
            return;
        } else {
            document.querySelector(".form__msgSubmit").style.display = "block";
            document.querySelectorAll(".form__item").forEach(function () {
                document.querySelector(".form").reset();
            });

        }
    }
    httpRequest.open('POST', 'https://formula-test-api.herokuapp.com/contact', true);
    httpRequest.send();
}

if (document.querySelector(".form")) {
    document.querySelector(".form").addEventListener("submit", function (e) {
        e.preventDefault();
        makeFormRequest();
    });

    document.querySelectorAll(".form .form__item").forEach((item) => {
        item.addEventListener("keyup", function (e) {
            document.querySelector(".form__msgSubmit").style.display = "none";
        });
    });
}


