$(() => {
    function checkScreenSize() {
        let windowWidth = $(window).width();
        let menu = $(".hamburger");
        let menuItems = $(".btn1");
        let flag = true;

        if (windowWidth < 768) {
            $(menu).show();
            $(menu).off("click").on("click", function () {
                $(menuItems).toggle(300, function () {
                    $(menu).text(flag ? "☰" :  "X" )
                    flag = !flag;
                })
            })
        }
        else {
            $(menuItems).show();
            $(menu).hide();
        }
    }
    checkScreenSize();

    $(window).resize(function () {
        checkScreenSize();
    });
})