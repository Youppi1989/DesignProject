const entities = [
  {
    text1: "Rostov-on-Don<br>LCD admiral",
    text2: "81 m2",
    text3: "3.5 months",
    text4: "Upon request",
    image: "./img/slide1.png",
    menuLiA: "ROSTOV-ON-DON, ADMIRAL",
  },
  {
    text1: "Sochi <br>Thieves",
    text2: "105 m2",
    text3: "4 months",
    text4: "Upon request",
    image: "./img/slide2.png",
    menuLiA: "Sochi Thieves",
  },
  {
    text1: "Rostov-on-Don<br> Patriotic",
    text2: "93 m2",
    text3: "3 months",
    text4: "Upon request",
    image: "./img/slide3.png",
    menuLiA: "Rostov-on-Don Patriotic",
  },
];

const arrowPrev = document.querySelector(".prev");
const arrowNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const titleElement = document.querySelector(".text1");
const textElement = document.querySelector(".text2");
const titlElement = document.querySelector(".text3");
const texElement = document.querySelector(".text4");
const menuLinks = document.querySelectorAll(".menu_li_a");
const imageElement = document.querySelector(".image");

let currentIndex = 0;

function updateSlide(index) {
  titleElement.innerHTML = entities[index].text1;
  textElement.innerHTML = entities[index].text2;
  titlElement.innerHTML = entities[index].text3;
  texElement.innerHTML = entities[index].text4;

  menuLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function showSlide(index) {
  if (index < 0) {
    currentIndex = entities.length - 1;
  } else if (index >= entities.length) {
    currentIndex = 0;
  }

  imageElement.style.backgroundImage = `url(${entities[index].image})`;

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
