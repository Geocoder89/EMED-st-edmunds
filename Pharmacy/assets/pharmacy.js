$(document).ready(function(){
    $('.toggle-sidebar').click(function (e) {
        $('.main-sidebar').toggleClass('open');
      });
      
$('#spin').click(function(){
$('span.bar1,span.bar2,span.bar3').toggleClass('change');
$('aside.c_sidebar').toggleClass('toggleinout');
$('main').toggleClass('col-lg-10 offset-lg-2 col-md-12 ').toggleClass('col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0');
$('div#footerr').toggleClass('col-lg-10 offset-lg-2 col-md-9 offset-md-3 col-sm-9 offset-sm-3 ').toggleClass('col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0');
});
});