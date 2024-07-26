window.addEventListener("load", function() {
    const menu = document.querySelector("#mobile-menu-button");
    const page = Array.from(document.querySelectorAll(".page"));

    menu.addEventListener("click", function() {
        page.forEach((p, index) => {
            p.style.transform = "translateX(-50vw)";
        })
    });
})