const images = ["0.jpg", "1.jpg", "2.png", "3.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/background/${chosenImage}')`;