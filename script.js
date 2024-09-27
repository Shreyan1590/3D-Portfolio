document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelectorAll(".text-slide");
  let current = 0;

  // Animated text cycle effect
  setInterval(() => {
      animatedText[current].classList.remove("active");
      current = (current + 1) % animatedText.length;
      animatedText[current].classList.add("active");
  }, 3000);

  const exploreBtn = document.getElementById("explore-btn");
  
  exploreBtn.addEventListener("click", () => {
      // Add navigation logic to other sections of the portfolio
  });
});
