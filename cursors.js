const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");
const ballMessage = cursorTag.querySelector("div span");
const images = document.querySelectorAll("img[data-hover], video[data-hover]");

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;
let speed = 0.2;

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";

    requestAnimationFrame(animate);
};

animate();

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
});

images.forEach(image => {
    image.addEventListener("mouseover", function () {
        ballMessage.innerHTML = image.getAttribute("data-hover");
    });

    image.addEventListener("mouseout", function () {
        ballMessage.innerHTML = "";
    });
});


