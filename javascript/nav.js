window.addEventListener("load", function() {
    const menu = document.querySelector("#mobile-menu-button");
    const page = Array.from(document.querySelectorAll(".page"));
    const title = document.querySelector("#mobile-title");
    const logo = document.querySelector("#mobile-logo");

    menu.addEventListener("click", function() {
        page.forEach((p, index) => {
            p.style.transform = "translateX(-50vw)";
        })
    });

    this.window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const treshold = window.innerWidth * 0.25;
        if( scrollPosition > treshold ) {
            title.style.transform = "translateY(-15vw)";
            menu.style.transform = "translateX(5.5vw)";
            logo.style.transform = "translateX(-5.5vw)";
        } else {
            title.style.transform = "translateY(0)";
            menu.style.transform = "translateX(0)";
            logo.style.transform = "translateX(0)";
        }

    });

})