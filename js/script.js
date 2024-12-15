const navBar = document.querySelector(".navbar");
const mBars = document.querySelector("#bars");

// Toggle navbar visibility
mBars.addEventListener("click", function () {
    navBar.classList.toggle("active");
});

// Hide navbar when clicking outside
document.addEventListener("click", function (e) {
    if (
        !e.composedPath().includes(navBar) &&
        !e.composedPath().includes(mBars)
    ) {
        navBar.classList.remove("active");
    }
});
