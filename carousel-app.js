const carouselItems = document.querySelectorAll(".carousel-item");
const totalNo = carouselItems.length - 1;
let index = 0;
document.querySelector(".prevBtn").addEventListener("click", moveToPrev);
document.querySelector(".nextBtn").addEventListener("click", moveToNext);

function resetCarousel() {
  carouselItems.forEach((item) => {
    item.classList.remove("visible");
  });
}

function moveToPrev() {
  resetCarousel();

  if (index === 0) {
    index = totalNo;
  } else {
    index--;
  }
  carouselItems[index].classList.add("visible");
}

function moveToNext() {
  resetCarousel();

  if (index === totalNo) {
    index = 0;
  } else {
    index++;
  }
  carouselItems[index].classList.add("visible");
}
