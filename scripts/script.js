"use strict";

// get element
const sliders = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// functions
sliders.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// addEventListener
let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
  // console.log(nextBtn);
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with sides
  // if (counter === sliders.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = sliders.length - 1;
  // }
  // working with button
  if (counter < sliders.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  sliders.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
