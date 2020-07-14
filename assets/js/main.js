
//PRELOADER
$(window).on('load', function(){
    $('body').imagesLoaded(function() {
        $("#preloader").delay(300).addClass('loaded');
    });
});

// *********parallax*
$(document).ready(function () {
    $('.prl').paroller();

});


// ****scroll text*****
$('#collapsibleNavbar a').on('click', function () {
    $('#collapsibleNavbar a').removeClass('active-scroll-header');
    $(this).addClass('active-scroll-header');
});

function changeBarNumber(number, join_btn = false) {

    // if (join_btn) {
    //     $('#collapsibleNavbar a').removeClass('active-scroll-header');
    //     $('#joinus').addClass('active-scroll-header');
    // }
    //
    // var current_state = $('.bar > .top').text();
    // current_state = parseInt(current_state);
    //
    // $('.bar > .top ').text(number);
    // number = parseInt(number) - 1;
    // var scroll = number * 60 + 'px';
    //
    // var speed = 500 * (Math.abs(number + 1 - current_state));
    //
    // $('.active-scroll').animate({top: scroll}, speed);

    // :))
}



$(function () {
    $(window).scroll(function () {
        $('.active-scroll').css('top', $(this).scrollTop() / 50 + '%');
        changeScroll();
    });
});

function changeScroll() {
    var scrollTop = window.pageYOffset;
    if ($(this).scrollTop() < 634) {
        $('.bar2 > .top ').text('01');
        $('#headerLine').css('transform', ' translateX(0%)').css('transition-timing-function', 'ease-in-out').css('transition', '1s');

    } else if (scrollTop >= $('#page2').position().top && scrollTop < $('#page3').position().top) {
        $('.bar2 > .top ').text('02');
        $('#headerLine').css('transform', ' translateX(350%)').css('transition-timing-function', 'ease-in-out').css('transition', '1s');

    } else if (scrollTop >= $('#page3').position().top && scrollTop < $('#page4').position().top) {
        $('.bar2 > .top ').text('03');
        $('#headerLine').css('transform', ' translateX(950%)').css('transition-timing-function', 'ease-in-out').css('transition', '1s');


    } else if (scrollTop >= $('#page4').position().top && scrollTop < $('#page5').position().top) {
        $('.bar2 > .top ').text('04');
        $('#headerLine').css('transform', ' translateX(1350%)').css('transition-timing-function', 'ease-in-out').css('transition', '1s');


    } else if (scrollTop >= $('#page5').position().top) {
        $('.bar2 > .top ').text('05');
        $('#headerLine').css('transform', ' translateX(2000%)').css('transition-timing-function', 'ease-in-out').css('transition', '1s');

    } else {
    }

}

changeScroll();


// Ajax form submit


$('.yes-btn').on('click', function (e) {

    var mail = $('#mail-input').val();
    if (mail == '' || mail == null) {
        swal("Oops", "Email can not be empty", "error");
        return false;
    }
    $('form').submit();
    return;
    var loading = $('.loading');
    var yes_btn = $('.yes-btn img');
    loading.show();
    yes_btn.hide();
    $.ajax({
        type: 'GET',
        url: 'http://chichiapp.ir:30032/ticket-to-heaven/kickstarter/email/add?email=' + mail,
        success: function (response) {
            if (response == 'd') {
                swal("Successful", "Your email registered", "success");
                loading.hide();
                yes_btn.show();
                $('#mail-input').val('');
            }

        }, error: function (error) {
            swal("Oops", "Your email already exist!", "error");
            loading.hide();
            yes_btn.show();
        }
    })
});

$('.char-container').on('click', function () {
    $('.charplace-not-active').show();
    $('.char-not-active').show();
    $('.charplace-active').hide();
    $('.char-active').hide();

    $(this).find('.charplace-not-active').hide();
    $(this).find('.char-not-active').hide();
    $(this).find('.charplace-active').show();
    $(this).find('.char-active').show();
});


// *********slider right on scroll**********
$(window).scroll(function () {
    let def = (($(window).scrollTop() + $(window).height()) / $("#scrollbar-rail").height()) * 10
    let persent = Math.round((def + Number.EPSILON) * 100) / 100
    // console.log("persent" + persent)

    var width = $(window).width();

    if (width <= 720) {
        if (persent > 4.2) {
            $("#input-range").val(persent)
         } else {
             $("#input-range").val(1)
         }

    }else {
        if (persent > 1.95) {
            $("#input-range").val(persent)
         } else {
            $("#input-range").val(1)
         }

    }



});


$(document).ready(function () {
    var slider = document.getElementById("input-range");

    slider.oninput = function () {
        let newScrollBAr = (this.value * $("#scrollbar-rail").height() * 0.1) - $(window).height()
        console.log(Math.round(newScrollBAr));
        $(window).scrollTop(Math.round(newScrollBAr));
    }

});




 // *************scroll top******
$(document).ready(function () {

    const moveScroll = (value) => {

        const $headerLine = document.getElementById(`headerLine`);
        var duration = 2;

        switch (value) {
            case 0:
                console.log("this is case 0")
                // $('#headerLine').css('transform', 'scale(' + ui.value + ')');
                $('#headerLine').css('transform', ' translateX(0%);');


                // TweenMax.to($headerLine,duration,{x: '0%',ease: Expo.easeInOut } );
                break;
            case 1:
                console.log("case1")
                $('#headerLine').css('transform', ' translateX(350%);');
                // TweenMax.to($headerLine,duration,{x: '350%',ease: Expo.easeInOut } );
                break;
            case 2:
                console.log("case2");
                // from = {y: '10vw'};
                // TweenMax.to($el, duration, from);
                $('#headerLine').css('transform', ' translateX(950%);');

                // TweenMax.to($headerLine,duration,{x: '950%',ease: Expo.easeInOut } );
                // this.setState({number:"03"});
                break;
            case 3:
                console.log("case3");
                // from = {y: '15vw'};
                // TweenMax.to($el, duration, from);
                $('#headerLine').css('transform', ' translateX(1350%);');

                // TweenMax.to($headerLine,duration,{x: '1350%',ease: Expo.easeInOut } );
                // this.setState({number:"04"});
                break;
            case 4:
                console.log("case4");
                // from = {y: '23vw'};
                // TweenMax.to($el, duration, from);
                $('#headerLine').css('transform', ' translateX(2400%);');

                // TweenMax.to($headerLine,duration,{x: '2000%',ease: Expo.easeInOut } );
                // this.setState({number:"05"});
                break;

            default:
            // code block
        }
    };
    // var elmnt = document.getElementById("main");
    // var x = elmnt.scrollLeft;
    var scrollTop = window.pageYOffset;
    console.log("scrollTop : " + scrollTop)

    if (scrollTop < 634) {
        console.log("aaaaaaaaa")

        moveScroll(0);

    } else if (scrollTop >= $('#page2').position().top && scrollTop < $('#page3').position().top) {
        console.log("aaaaaaaaa")

        moveScroll(1);

    } else if (scrollTop >= $('#page3').position().top && scrollTop < $('#page4').position().top) {
        console.log("aaaaaaaaa")

        moveScroll(2);

    } else if (scrollTop >= $('#page4').position().top && scrollTop < $('#page5').position().top) {
        console.log("aaaaaaaaa")

        moveScroll(3);

    } else if (scrollTop >= $('#page5').position().top) {

        moveScroll(4);

    } else {
    }


});



$(document).ready(function () {

    let def = (($(window).scrollTop() + $(window).height()) / $("#scrollbar-rail").height()) * 10
    let persent = Math.round((def + Number.EPSILON) * 100) / 100
    // console.log("persent" + persent)
    var width = $(window).width();

    if (width <= 720) {
        if (persent > 4.2) {
            $("#input-range").val(persent)
        } else {
            $("#input-range").val(1)
        }

    }else {
        if (persent > 1.95) {
            $("#input-range").val(persent)
        } else {
            $("#input-range").val(1)
           }

    }


});
// *********pag3 motion**

$(document).ready(function () {


    $('.box-line').click(function() {

        if (this.id === "daisey") {
            $(this).find(".character-inline").css("bottom","-9%");
            $(this).find(".line-character").css("top","44%");
            $(this).addClass("active-tab");
            $(this).siblings(".active-tab").find(".character-inline").animate({bottom: "-13%"});
            $(this).siblings(".active-tab").find(".line-character").animate({top: "54%"});
         } else {
            $(this).find(".character-inline").css("bottom","-5%");
            $(this).find(".line-character").css("top","44%");
             $(this).addClass("active-tab");
            if ( $("#daisey").hasClass("active-tab")){
                $("#daisey").find(".character-inline").animate({bottom: "-18%"})
                // $("#daisey").find(".character-inline").css( "bottom", "-18%" );
            } else {
                $(this).siblings(".active-tab").find(".character-inline").animate({bottom: "-13%"});
            }
            $(this).siblings(".active-tab").find(".line-character").animate({top: "54%"});

        }
        const id="."+this.id;
        $(id).siblings(".box-ch").addClass("d-none");
        $(id).removeClass("d-none");



        // $(this).siblings(".active-tab").find(".character-inline").css("bottom","-8%");


        // else if (this.id==="daisey"){
        //
        // }
        $(this).siblings(".active-tab").removeClass("active-tab");

        // $(this).siblings('li').removeClass('active');
        // $(this).addClass('active');
    });
    $("#copper").click();

});

// ********classControll****
$

$(document).ready(function () {
    var width = $(window).width();

        if (width <= 720) {
            $("#navigationTop").addClass("nav-bg");
            $(".navbar-toggler-icon").addClass("navbar-toggler-icon-sm");
            $(".input-pic").addClass("input-form-active");
            $(".nav-item").attr("data-target", "#collapsibleNavbar");
            $("#headerBar").attr("width", 20).attr("height", 20);
            $("  textarea").attr("rows", 6).removeClass("mt-5").addClass("mt-3") ;
        }else {
            $("#navigationTop").removeClass("nav-bg");
            $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-sm");
            $(".input-pic").removeClass("input-form-active");
            $(".nav-item").attr("data-target", "#");
            $("#headerBar").attr("width", 40).attr("height", 40);
            $("  textarea").attr("rows", 10).removeClass("mt-3").addClass("mt-5") ;
        }

})

$(window).resize(function () {
    var width = $(window).width();
    console.log(width)
    if (width <= 720) {
        $("#navigationTop").addClass("nav-bg");
        $(".navbar-toggler-icon").addClass("navbar-toggler-icon-sm");
        $(".input-pic").addClass("input-form-active");

        $(".nav-item").attr("data-target", "#collapsibleNavbar");
        $("#headerBar").attr("width", 20).attr("height", 20);
        $(" textarea").attr("rows", 6).removeClass("mt-5").addClass("mt-3") ;
    }else {
        $("#navigationTop").removeClass("nav-bg");
        $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-sm");
        $(".input-pic").removeClass("input-form-active");
        $(".nav-item").attr("data-target", "#");
        $("#headerBar").attr("width", 40).attr("height", 40);
        $("  textarea").attr("rows", 10).removeClass("mt-3").addClass("mt-5") ;
    }
});


