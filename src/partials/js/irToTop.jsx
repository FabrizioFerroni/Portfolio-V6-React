import $ from 'jquery';

export function irToTop() {
    $(document).ready(function() { irArriba(); });

    function irArriba() {
        $('.ir-arriba').hide();
        $('.ir-arriba').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }) /*, 1000 */
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.ir-arriba').fadeIn();
            } else {
                $('.ir-arriba').fadeOut();
            }
        });
    }
}