let slideIdx = 0;
showSlides(slideIdx);

function plusSlides(n){
  showSlides(slideIdx += n);
}

function currentSlide(n){
  showSlides(n);
}

function showSlides(n){
  let slide = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  let index = Math.abs(n % 4);

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slide[0].style = `background-image: url(./images/hero-image-${index}.jpg)`;
  dots[index].className += " active";
}