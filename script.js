// loader
window.onload = function(){
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
        document.querySelector(".main-content").style.display = "block";
    }, 3000);
}



// scroll-navbar
let lastscrollY = window.scrollY
let header = document.getElementById("header")
let hideTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(hideTimeout);

    if(window.scrollY > lastscrollY)
    {
        header.style.top = "-70px";
        hideTimeout = setTimeout(() => {
            header.style.top = "0";
        },1000);
    }
    else
    {
        header.style.top = "0";
    }

    lastscrollY = window.scrollY;
})

// scrollTop

// Select the scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down 300px
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

