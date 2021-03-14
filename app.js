//Title line effect
const titleSection = document.getElementById("section-title");
titleSection.addEventListener("mouseover", () => {
  const line = document.querySelector(".line");
  line.style.transition = "width 1s";
  line.style.width = "50%";
});
titleSection.addEventListener("mouseout", (e) => {
  const line = document.querySelector(".line");
  line.style.transition = "width 1s";
  line.style.width = "0%";
});

//Projects appear on scroll
const scrollAppear = () => {
  const projects = document.querySelector(".projects");
  const introPosition = projects.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;
  if (introPosition < screenPosition) {
    projects.classList.add("projects-show");
  } else {
    projects.classList.add("projects");
  }
};
window.addEventListener("scroll", scrollAppear);

//Change image con mouse over
const me = document.querySelector(".Pablo");

me.addEventListener(
  "mouseover",
  () => {
    const pablo = document
      .querySelector(".Pablo")
      .setAttribute("src", "./images/secondMe.png");
    setTimeout(() => {
      const pablo = document
        .querySelector(".Pablo")
        .setAttribute("src", "./images/endMe.png");
    }, 4000);
  },
  { once: true }
);
