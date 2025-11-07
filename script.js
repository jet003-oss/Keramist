// Loading ekran animasiyası
window.addEventListener("load", () => {
  document.querySelector(".loading-screen").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none";
  }, 800);
});
