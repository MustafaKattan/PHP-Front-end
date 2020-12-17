

var lastScroll = 0;

$(window).scroll(
    function()
    {
        if(window.innerWidth > 1000)
        {
            var top = $(this).scrollTop();

            if (top > lastScroll)
            {
                $("header #top").css('height', '0px');
                $("header #bottom #logo").css('top', '0px');
                $("header #bottom #bulb").css('top', '0px').css('transform', 'scale(0)');
                $(":root").css('--header-height', '40px');
            }
            else
            {
                if(top <= 250)
                {
                    $("header #top").css('height', '40px');
                    $("header #bottom #logo").css('top', '70px');
                    $("header #bottom #bulb").css('top', 'var(--header-height)').css('transform', 'scale(1)');
                    $(":root").css('--header-height', '120px');
                }
            }

            lastScroll = top;
        }
    }
);