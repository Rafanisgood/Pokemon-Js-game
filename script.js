const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './images/whale village.png';

const playerImage = new Image();
playerImage.src = 'images/playerDown.png';

function draw() {
    if (image.complete) {
        c.drawImage(image, -510, -640);
    }

    if (playerImage.complete) {
        c.drawImage(
            playerImage,
            0, 0,
            playerImage.width / 4,
            playerImage.height,
            canvas.width / 2 - playerImage.width / 4 / 2,
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
        ); 
    }
}

image.onload = draw;
playerImage.onload = draw;

window.addEventListener('keydown', (e) => {
    console.log('go');
});
