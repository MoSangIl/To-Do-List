const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpeg", "4.jpg"];

const imgElement = document.createElement("img");
const image = images[Math.floor(Math.random() * images.length)];
imgElement.src = `img/${image}`;

document.body.appendChild(imgElement);
