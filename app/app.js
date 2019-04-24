//nav bar mobile dropdown
var clicked = false;

$(".nav__hamburger").click(function(){
    $(".nav__hamlinks").toggleClass("open");
    clicked = !clicked;
});

$(window).resize(function(){
    if(window.innerWidth>=768 && $(".nav__hamlinks").hasClass("open")) {
        $(".nav__hamlinks").removeClass("open");
    } else if (window.innerWidth<768 && clicked ) {
        $(".nav__hamlinks").addClass("open");
    }
});

//getting data
$.getJSON("data/data.json", function(data){
    console.log(data);

    $('.home__text--left').html(data.header);
    $('.home__text--right').html(data.tagline);
    $('.about__text').html(data.about);

    $('.flavors__flavorblueJSON').html(data.flavors[0].flavor);
    $('.flavors__costblueJSON').html(data.flavors[0].cost);
    $('.flavors__flavor--blue').css("background-image", "url('images/" + data.flavors[0].image + "')");

    $('.flavors__flavorchocJSON').html(data.flavors[1].flavor);
    $('.flavors__costchocJSON').html(data.flavors[1].cost);
    $('.flavors__flavor--choc').css("background-image", "url('images/" + data.flavors[1].image + "')");
    // $('.flavors__flavor--choc').css("background", "url('../images/ " + data.flavors[1].image + "') no-repeat center");
    // $('.flavors__flavor--choc').css({"background": "url('../images/ " + data.flavors[1].image + "') no-repeat center", "background-size": "cover"});

    $('.flavors__flavorvanJSON').html(data.flavors[2].flavor);
    $('.flavors__costvanJSON').html(data.flavors[2].cost);
    $('.flavors__flavor--van').css("background-image", "url('images/" + data.flavors[2].image + "')");

    $('.flavors__flavortrioJSON').html(data.flavors[3].flavor);
    $('.flavors__costtrioJSON').html(data.flavors[3].cost);
    $('.flavors__flavor--trio').css("background-image", "url('images/" + data.flavors[3].image + "')");
});

//flavor pop ups
$('.flavors__flavor--blue').click(function(){
    $('.flavors__flavor--blue').toggleClass('expand');
    $('.flavors__flavortext--hidden').toggleClass('open');
});

$('.flavors__flavor--choc').click(function(){
    $('.flavors__flavor--choc').toggleClass('expand');
    $('.flavors__flavortext--hidden').toggleClass('open');
});

$('.flavors__flavor--van').click(function(){
    $('.flavors__flavor--van').toggleClass('expand');
    $('.flavors__flavortext--hidden').toggleClass('open');
});

$('.flavors__flavor--trio').click(function(){
    $('.flavors__flavor--trio').toggleClass('expand');
    $('.flavors__flavortext--hidden').toggleClass('open');
});