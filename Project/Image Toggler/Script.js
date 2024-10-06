const images = [
    'billi1.jpg',
    'obito.jpg',
  ];
  let currentIndex = 0;
  
  const imageElement = document.getElementById('image');
  
  function toggleImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    imageElement.src = images[currentIndex]; // Set new image source
  }
  setInterval(toggleImage, 2000);
  