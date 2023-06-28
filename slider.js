const entities = [
  {
    text1: "Rostov-on-Don<br>LCD admiral",
    text2: "81 m2",
    text3: "3.5 months",
    text4: "Upon request",
    backgroundImage: "./img/image 2.1.png",
    menuLiA: "ROSTOV-ON-DON, ADMIRAL",
  },
  {
    text1: "Sochi <br>Thieves",
    text2: "105 m2",
    text3: "4 months",
    text4: "Upon request",
    backgroundImage: "./img/Mask Group.jpg",
    menuLiA: "Sochi Thieves",
  },
  {
    text1: "Rostov-on-Don<br> Patriotic",
    text2: "93 m2",
    text3: "3 months",
    text4: "Upon request",
    backgroundImage: "./img/Mask Group (1).png",
    menuLiA: "Rostov-on-Don Patriotic",
  },
];

const arrowPrev = document.querySelector(".prev");
const arrowNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const titleElement = document.querySelector(".text1");
const textElement = document.querySelector(".text2");
const menuLinks = document.querySelectorAll(".menu_li_a");

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
