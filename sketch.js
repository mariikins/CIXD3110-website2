/* ------------------------------
   SCROLL REVEAL
------------------------------ */

const sections = document.querySelectorAll(
  ".intro-content, .timeline-item, .park-card, .visit-info > div"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});


/* ------------------------------
   CURSOR INTERACTION
------------------------------ */

const statement = document.querySelector(".statement");
const statementText = document.querySelector(".statement h2");

statement.addEventListener("mousemove", (event) => {

  const rect = statement.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (x - centerX) / 25;
  const moveY = (y - centerY) / 25;

  statementText.style.transform =
    `translate(${moveX}px, ${moveY}px)`;
});


statement.addEventListener("mouseleave", () => {

  statementText.style.transform =
    "translate(0, 0)";

});


/* ------------------------------
   MOUSE PARALLAX
------------------------------ */

const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero h1");

hero.addEventListener("mousemove", (event) => {

  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  heroTitle.style.transform =
    `translate(${x}px, ${y}px)`;

});

hero.addEventListener("mouseleave", () => {

  heroTitle.style.transform =
    "translate(0, 0)";

});


/* ------------------------------
   ADD CURRENT YEAR
------------------------------ */

const year = document.querySelector(".footer-bottom span:last-child");

if (year) {
  year.textContent = `© ${new Date().getFullYear()}`;
}