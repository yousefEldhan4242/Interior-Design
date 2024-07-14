const burgerIcon = document.querySelector(".burger-icon");
const ul = document.querySelector(".links ul");

const nums = document.querySelectorAll(".numbers h2 .num");
let numsSection = document.querySelector(".counter-section");
let started = false;

const scrollIcon = document.querySelector(".scroll-icon");

window.addEventListener("scroll", function () {
  if (window.scrollY >= numsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => {
        counter(num);
      });
    }
    started = true;
  }
});

window.addEventListener("scroll", function () {
  window.scrollY >= document.documentElement.clientHeight
    ? scrollIcon.classList.add("show", "animate-go-up")
    : scrollIcon.classList.remove("show", "animate-go-up");
});

scrollIcon.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

burgerIcon.addEventListener("click", () => {
  ul.classList.toggle("clicked");
  burgerIcon.classList.toggle("clicked");
});

function counter(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2400 / goal);
}
