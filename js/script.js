$(function() {
    $('.work-sample').hover(function(){
        $(this).children('div.text-center').slideDown(500)
    },
    function(){
        $(this).children('div.text-center').stop().slideUp(500)
    })
    $('.faq-header').click(function(){
        if ($(this).next().css('display') === 'none') {
            $(this).parent('.faq-item').css('border','1px solid red')
            $(this).css({'background-color':'red','color':'white'})
            $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up')
            $(this).next().slideDown(500)
        } else {
            $(this).parent('.faq-item').css('border','1px solid #ccc')
            $(this).css({'background-color':'white','color':'black'})
            $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down')
            $(this).next().slideUp(500)
        }
    })

    $(".show-phone-nav").click(function() {
        $("#phone-nav").show(300)
    })

    $(".close-phone-nav").click(function() {
        $("#phone-nav").hide(300)
    })

});