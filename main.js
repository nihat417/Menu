$(() => {
    let menu = $(".hamburger");
    let menuItems = $(".btn1");
    function checkScreenSize() {
        let windowWidth = $(window).width();

        if (windowWidth < 768) {
            $(menu).show();
            $(menu).off("click").on("click", function () {
                $(menuItems).toggle(900, function () {
                })
                menu.text(menu.text() === "X" ? "☰" : "X");
            })
            $(menuItems).hide();
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