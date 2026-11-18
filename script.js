// Fade in sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.5 },
);
sections.forEach((s) => observer.observe(s));

// Highlight the active nav link
const links = document.querySelectorAll("nav ul a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});
