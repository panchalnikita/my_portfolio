                                jQuery(function ($) {
                                    "use strict";

                                    /* ========================================================================= */
                                    /*	Page Preloader
                                    /* ========================================================================= */

                                    window.onload = function () {
                                        // document.getElementById('loading-mask').style.display = 'none';
                                    }

                                    /* =========================================================================== */
                                    /*	FitVids js
                                    /* =========================================================================== */

                                    $(".media-wrapper").fitVids();


                                    /* ========================================================================= */
                                    /*	Nice Scroll - Custom Scrollbar
                                    /* ========================================================================= */

                                    var nice = $("html").niceScroll({
                                        cursorborderradius: 0,
                                        cursorwidth: "8px",
                                        cursorfixedheight: 150,
                                        cursorcolor: "#A29060",
                                        zindex: 9999,
                                        cursorborder: 0,
                                    });


                                    /* ========================================================================= */
                                    /*	Scroll Up / Back to top
                                    /* ========================================================================= */

                                    $(window).scroll(function () {
                                        if ($(window).scrollTop() > 400) {
                                            $("#scrollUp").fadeIn(200);
                                        } else {
                                            $("#scrollUp").fadeOut(200);
                                        }
                                    });

                                    $('#scrollUp').click(function () {
                                        $('html, body').stop().animate({
                                            scrollTop: 0
                                        }, 1500, 'easeInOutExpo');
                                    });


                                    /* ========================================================================= */
                                    /*	Post image slider
                                    /* ========================================================================= */

                                    $("#post-thumb, #gallery-post").owlCarousel({

                                        navigation: true,
                                        pagination: false,
                                        slideSpeed: 800,
                                        autoHeight: true,
                                        paginationSpeed: 800,
                                        singleItem: true,
                                        navigationText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"]

                                    });

                                    $("#features").owlCarousel({
                                        navigation: false,
                                        pagination: true,
                                        slideSpeed: 800,
                                        singleItem: true,
                                        transitionStyle: "fadeUp",
                                        paginationSpeed: 800,
                                    });


                                    /* ========================================================================= */
                                    /*	Menu item highlighting
                                    /* ========================================================================= */


                                    $("#navigation").sticky({
                                        topSpacing: 0
                                    });

                                    $('#nav').onePageNav({
                                        currentClass: 'current',
                                        changeHash: false,
                                        scrollSpeed: 1500,
                                        scrollThreshold: 0.5,
                                        filter: '',
                                        easing: 'easeInOutExpo'
                                    });



                                    /* ========================================================================= */
                                    /*	Fix Slider Height
                                    /* ========================================================================= */

                                    var slideHeight = $(window).height();

                                    $('#slitSlider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);

                                    $(window).resize(function () {
                                        'use strict',
                                        $('#slitSlider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);
                                    });



                                    /* ========================================================================= */
                                    /*	Timer count
                                    /* ========================================================================= */

                                    (function () {
                                        var count = {
                                            initialized: false,
                                            initialize: function () {
                                                if (this.initialized)
                                                    return;
                                                this.initialized = true;
                                                this.build();
                                            },
                                            build: function () {
                                                this.animations();
                                            },
                                            animations: function () {
                                                // Count To
                                                $(".counters-item [data-to]").each(function () {
                                                    var $this = $(this);
                                                    $this.appear(function () {
                                                        $this.countTo({});
                                                    }, {
                                                        accX: 0,
                                                        accY: -150
                                                    });
                                                });
                                            },
                                        };
                                        count.initialize();
                                    })();


                                    /* ========================================================================= */
                                    /*	Skills Chart
                                    /* ========================================================================= */

                                    $(".chart").appear(function () {
                                        $(".chart").easyPieChart({
                                            easing: "easeOutBounce",
                                            barColor: "#A29060",
                                            size: "150",
                                            lineWidth: 7,
                                            animate: 2e3,
                                            onStep: function (e, t, n) {
                                                $(this.el).find(".percent").text(Math.round(n))
                                            }
                                        })
                                    });



                                    /* ========================================================================= */
                                    /*	Portfolio Filtering Hook
                                    /* =========================================================================  */

                                    $('#og-grid').mixItUp(); // Portfolio filter

                                    Grid.init(); //Portfolio Grid Expand


                                    

                                    /* ========================================================================= */
                                    /*   Contact Form Validating
                                    /* ========================================================================= */


                                    $('#contact-submit').click(function (e) {

                                        //stop the form from being submitted
                                        e.preventDefault();

                                    });
                                    // Email send ------
                                    $(document).ready(function () {

                                        $('#contact-submit').click(function () {
                                            (function () {

                                                emailjs.init("user_BzinE4fSK4CQpru2zwrEW");
                                            })();
                                            if ($("#name").val() == "" || $("#name").val() == null || !isNaN($("#name").val())) {
                                                $('#name').css("border-color", "#D8000C");
                                            } else {

                                                var a = $("#name").val();
                                                var b = $("#message").val();
                                                var c = $("#email").val();

                                                emailjs.send("nikita619092_gmail_com", "template_aOOXb0yh", {
                                                        name: "Nikitabahen",
                                                        notes: b,
                                                        email: c,
                                                        final_name: a


                                                    })
                                                    .then(function (response) {
                                                       // console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
													$("#name").val(null);
													$("#message").val(null);
													$("#email").val(null);
													alert("Thank you, I will Get back to you soon.");
                                                    }, function (err) {
                                                        //console.log("FAILED. error=", err);
													alert("Sorry!! Please try Again.");
                                                    });
                                            }
                                        })
                                    })

                                });

                                /* ========================================================================= */
                                /*	On scroll fade/bounce fffect
                                /* ========================================================================= */

                                wow = new WOW({
                                    animateClass: 'animated',
                                    offset: 120
                                });
                                wow.init();


                                /* ========================================================================= */
                                /*	Home page Slider
                                /* ========================================================================= */

                                $(function () {

                                    var Page = (function () {

                                        var $navArrows = $('#nav-arrows'),
                                            $nav = $('#nav-dots > span'),
                                            slitslider = $('#slitSlider').slitslider({

                                                    
                                                speed: 1600,

                                                onBeforeChange: function (slide, pos) {

                                                    $nav.removeClass('nav-dot-current');
                                                    $nav.eq(pos).addClass('nav-dot-current');

                                                }
                                            }),

                                            init = function () {
                                                initEvents();
                                            },
                                            initEvents = function () {
                                                // add navigation events
                                                $navArrows.children(':last').on('click', function () {
                                                    slitslider.next();
                                                    return false;
                                                });

                                                $navArrows.children(':first').on('click', function () {
                                                    slitslider.previous();
                                                    return false;
                                                });

                                                $nav.each(function (i) {
                                                    $(this).on('click', function (event) {
                                                        var $dot = $(this);
                                                        if (!slitslider.isActive()) {
                                                            $nav.removeClass('nav-dot-current');
                                                            $dot.addClass('nav-dot-current');
                                                        }

                                                        slitslider.jump(i + 1);
                                                        return false;

                                                    });
                                                });
                                            };
                                        return {
                                            init: init
                                        };

                                    })();

                                    Page.init();

                                });


                                /* ========================================================================= */
                                /*	Parallax Sections
                                /* ========================================================================= */


                                "use strict";

                                function parallaxInit() {
                                    $('#counter').parallax("50%", 0.3);
                                    $('#team-skills').parallax("50%", 0.3);
                                    $('#twitter-feed').parallax("50%", 0.3);
                                    $('#testimonial').parallax("50%", 0.3);
                                }

                                $(window).bind("load", function () {
                                    parallaxInit()
                                });
                                /* Type Js */
                                $(document).ready(function () {
                                    $('.headerfont').typeIt({
                                        String: ['Enter your string'],
                                        speed: 90,
                                        autoStart: false

                                    });
                                })
/* Particle js */
/*$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });*/
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#A29060',
    lineColor: '#A29060'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
