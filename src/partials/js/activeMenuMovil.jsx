import $ from 'jquery';

export function activeMenuMovil() {
    const btns =
        $("#header_movil .nav__navbar__movil .nav__links__movil");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",
            function() {
                const current = document
                    .getElementsByClassName("active");

                current[0].className = current[0]
                    .className.replace(" active", "");
                console.log(this.className);

                this.className += " active";
            });
    }

    /* Code for changing active
    link on Scrolling */
    $(window).scroll(function() {
        const distance = $(window).scrollTop();
        $('.page-section').each(function(i) {

            if ($(this).position().top <=
                distance + 250) {

                $('.nav__navbar__movil a.active')
                    .removeClass('active');

                $('.nav__navbar__movil a').eq(i)
                    .addClass('active');
            }
        });
    }).scroll();
}