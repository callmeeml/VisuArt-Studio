document.addEventListener("DOMContentLoaded", () => {
    let carouselIndex = 0;
    const images = document.querySelectorAll("#carousel-container img");
  
    function showNextImage() {
      images[carouselIndex].style.display = "none";
      carouselIndex = (carouselIndex + 1) % images.length;
      images[carouselIndex].style.display = "block";
    }
  
    images.forEach((img, idx) => (img.style.display = idx === 0 ? "block" : "none"));
    setInterval(showNextImage, 3000);
  });