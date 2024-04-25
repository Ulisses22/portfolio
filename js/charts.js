(function($) {
    "use strict";

    var $bars = $(".bar"),
        $section = $("#skills"),
        methods = {
            init: function() {
                $(window).on('scroll', methods.checkSectionInView);
            },
            checkSectionInView: function() {
                if (isElementInViewport($section)) {
                    methods.animateBars();
                    $(window).off('scroll', methods.checkSectionInView);
                }
            },
            animateBars: function() {
                $bars.each(function() {
                    var $bar = $(this),
                        $pct = $bar.find(".pct"),
                        data = $bar.data("bar");

                    setTimeout(function() {
                        $bar.css("background-color", data.color)
                            .animate({
                                "width": $pct.html()
                            }, data.speed || 4000, function() {
                                $pct.css({
                                    "color": data.color,
                                    "opacity": 1
                                });
                            });
                    }, data.delay || 0);
                });
            }
        };

    methods.init();

    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }

})(jQuery);
