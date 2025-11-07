// Sadə animasiya effekti
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
