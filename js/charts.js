(function ($) {
    "use strict";

    var $bars = $(".bar"),
        $section = $("#skills"), // Substitua "your-section-id" pelo ID da sua seção
        methods = {
            init: function () {
                // Bind events
                methods.bindEvents();
            },
            bindEvents: function () {
                // Check if the section is in viewport when scrolling
                $(window).on('scroll', function () {
                    if (isElementInViewport($section)) {
                        // If the section is in viewport, activate the progress bars
                        methods.animateBars();
                    }
                });
            },
            animateBars: function () {
                // Loop through each of the bars...
                $bars.each(function () {
                    var $bar = $(this),
                        $pct = $bar.find(".pct"),
                        data = $bar.data("bar");

                    setTimeout(function () {
                        $bar
                            .css("background-color", data.color)
                            .animate({
                                "width": $pct.html()
                            }, data.speed || 7000, function () {
                                $pct.css({
                                    "color": data.color,
                                    "opacity": 1
                                });
                            });
                    }, data.delay || 0);
                });
            }
        };

    // Initialize on page load
    methods.init();

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

})(jQuery);
