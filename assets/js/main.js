$(document).ready(function () {
    AOS.init();

    // parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // init controler
    var controller = new ScrollMagic.Controller();

    // zone1
    $('.zone1-list-item').mouseenter(function () {
        var data = $(this).attr('data-zone1');
        $('.zone1-list-overlay').addClass('clicked');
        $('#' + data).addClass('active');
        setTimeout(function () {
            $('#' + data).addClass('reveal');
        }, 100);

    })
    $('.zone1-list-overlay').mouseleave(function () {
        $(this).removeClass('clicked');
        $('.list-overlay-item').removeClass('active');
        $('.list-overlay-item').removeClass('reveal');
    })

    // zone2
    $('#zone2-btn').click(function () {
        $('.zone-list').removeClass('active');
        $('.zone-overlay').addClass('active');
    });

    // zone3
    $('.zone-planet').mouseenter(function () {
        var data = $(this).attr('zone-id');
        $('#' + data).addClass('active');
        setTimeout(function () {
            $('#' + data).addClass('reveal');
        }, 100);
    });

    $('.zone-planet').mouseleave(function () {
        $('.planet-overlay').removeClass('active');
        $('.planet-overlay').removeClass('reveal');
    });

    // zone4
    var tl4 = new TimelineMax();
    tl4.from($('#fan1'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        })
        .from($('#fan2'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.5');

    new ScrollMagic.Scene({
            triggerElement: '.zone4',
            offset: 50,
        })
        .setTween(tl4)
        .addIndicators()
        .addTo(controller);

    // zone5
    var tl5 = new TimelineMax();
    tl5.from($('#data1'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        })
        .from($('#data2'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data3'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data4'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data5'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data6'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data7'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data8'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data9'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data10'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75')
        .from($('#data11'), 1, {
            scaleX: 0,
            ease: Power2.easeInOut
        }, '-=0.75');

    new ScrollMagic.Scene({
            triggerElement: '.zone5',
            offset: 50,
        })
        .setTween(tl5)
        .addIndicators()
        .addTo(controller);

    // zone6
    $('.btn-group__item').click(function () {
        var data = $(this).attr('data-btn');
        $('.btn-group__item').removeClass('animated');
        $('.zone6-result__item').removeClass('active');
        $(this).addClass('animated');
        $('#' + data).addClass('active');
    });
});