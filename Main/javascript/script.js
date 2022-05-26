var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let number = document.querySelector(".number");
let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");

console.log(number2);

let count = 0;
let count1 = 0;
let count2 = 0;

setInterval(() => {
  if (count < 2500) {
    count++;
    number.innerHTML = count;
  }
  if (count1 < 2000) {
    count1++;
    number1.innerHTML = count1;
  }

  if (count2 < 2000) {
    count2++;
    number2.innerHTML = count2;
  }
}, 2);

let main = document.querySelector(".mainDiv");
let img1 = document.querySelector(".first");
let img2 = document.querySelector(".second");
let img3 = document.querySelector(".third");

let img4 = document.querySelector(".fourth");
let img5 = document.querySelector(".fifth");
let img6 = document.querySelector(".sixth");

img1.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img1).backgroundImage;
});

img2.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img2).backgroundImage;
});

img3.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img3).backgroundImage;
});

img4.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img4).backgroundImage;
});

img5.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img5).backgroundImage;
});

img6.addEventListener("click", () => {
  main.style.backgroundImage = window.getComputedStyle(img6).backgroundImage;
});
