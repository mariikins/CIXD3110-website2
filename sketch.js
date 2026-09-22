const cursor = document.querySelector(".cursor");
const images = document.querySelectorAll(".hero-image, .look-image");
const heroTitle = document.querySelector(".hero-title");


// ---------------- CUSTOM CURSOR ----------------

document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

});


// Make cursor larger over images

images.forEach((image) => {

    image.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    });

    image.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    });

});


// ---------------- MOUSE PARALLAX ----------------

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {
        heroImage.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;
    }

});


// ---------------- SCROLL EFFECT ----------------

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (heroTitle) {
        heroTitle.style.transform =
            `translateX(${scroll * 0.08}px)`;
    }

});


// ---------------- IMAGE REVEAL ----------------

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".look").forEach((look) => {

    look.style.opacity = "0";
    look.style.transform = "translateY(50px)";
    look.style.transition =
        "opacity 1s ease, transform 1s cubic-bezier(.2,.7,.2,1)";

    observer.observe(look);

});