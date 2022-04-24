// Preloader

$(window).on("load", function() {
    $("#status").delay(500).fadeOut("slow");
    $("#preloader").delay(1000).fadeOut("slow");
});


// Progress Bar - Waypoints

$(function() {
    $("#skills").waypoint(function() { //Call Waypoints and define the operation for it
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 3000);
        });
        this.destroy(); //Repeat once
    }, {
        offset: 'bottom-in-view' //Sensitize the bottom of the page
    });
});


// Smooth Scroll

$(function() {
    $(" a.smooth-scroll ").click(function(e) {
        e.preventDefault(); // حالت پیش فرض مرورگر رو غیرفعال میکنیم

        var sectionid = $(this).attr("href"); // آدرس اونا رو در یک متغیر میریزیم

        $("html, body").animate({
            scrollTop: $(sectionid).offset().top
        }, 1250); // بعد با ویژگی انیمیشن کارون رو راه میندازیم

    });
})