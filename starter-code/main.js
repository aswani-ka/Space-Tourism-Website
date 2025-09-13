const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false
  });

const dotButtons = document.querySelectorAll('.a11y-slider-dots li button');
dotButtons.forEach((button, index) => {
  button.textContent = (index + 1).toString();
});



