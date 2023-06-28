const images = [
  "./img/image 2.1.png",
  "./img/Mask Group.jpg",
  "./img/Mask Group (1).png",
];
const titles = ["Title 1", "Title 2"];
const descriptions = ["Description 1", "Description 2"];

const arrowPrev = document.querySelector(".prev");
const arrowNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const titleElement = document.querySelector(".title");
const textElement = document.querySelector(".text");
const menuLinks = document.querySelectorAll(".menu li a");

let currentIndex = 0;

function updateSlide(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  titleElement.textContent = titles[index];
  textElement.textContent = descriptions[index];

  menuLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });
}

function showSlide(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  document.querySelector(
    ".image"
  ).style.backgroundImage = `url(${images[currentIndex]})`;

  updateSlide(currentIndex);
}

arrowPrev.addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

arrowNext.addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

menuLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = index;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
