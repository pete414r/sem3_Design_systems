$(document).ready(function() {

    // fixed til top
    $('nav').addClass('nav-fixed');
    $('nav > div.logo').css('visibility','visible').fadeIn();
    $('nav > div.nav-toggle').css('visibility','visible').fadeIn();

    // side nav åbener
    $('.nav-icon').click(function(){
        $(".nav-full").toggleClass('active');
        $('main').toggleClass('active');
        $(this).find('img').toggle();
    });

    // lukkeklik
    $('.nav-full').find('a').click(function(){
        $('.nav-full').toggleClass('active');
        $('main').toggleClass('active');
        $('.nav-icon').find('img').toggle();
    });

    // fremhæver block
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
