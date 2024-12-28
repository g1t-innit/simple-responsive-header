document.addEventListener("DOMContentLoaded", function() {
    const navBtn = document.querySelector(".nav__btn");
    const navMobile = document.querySelector(".nav__mobile");
    let navOpen = false;

    navBtn.addEventListener("click", function() {
        if (navOpen) {
            navBtn.classList.remove("navbtn--open");
            navMobile.classList.remove("nav__mobile--open");
            navOpen = false;
        } else {
            navBtn.classList.add("navbtn--open");
            navMobile.classList.add("nav__mobile--open");
            navOpen = true;
        }
    });
});
