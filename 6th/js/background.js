const images =[
    "budapest.jpg",
    "fussen.jpg",    
    "london.jpg",
    "madrid.jpg",
    "paris.jpg",
    "prague.jpg",
    "rome.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src =`css/img/${chosenImage}`;
document.body.appendChild(bgImage);