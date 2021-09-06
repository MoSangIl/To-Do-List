const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

// const imgElement = document.createElement("img");
const image = images[Math.floor(Math.random() * images.length)];
// imgElement.src = `img/${image}`;

// document.body.appendChild(imgElement);

document.body.style.backgroundImage = `url(../img/${image})`;
