var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[4000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})
