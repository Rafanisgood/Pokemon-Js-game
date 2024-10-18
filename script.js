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

let imagesLoaded = 0;

//the function for drawing both images and character
function draw() {
    if (imagesLoaded === 2) //only draw when both images are loaded
    {        
        c.drawImage(image, -510, -640);
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

//here the issue was the character was being drawn before it was done loading completely. The browser doesnt wait for the character to load properly before drawing and that was the issue. sometimes the character loaded before getting drawn and sometimes it didnt.. here we are calling the draw function(draws the map and character) after the images are completely loaded(which is checked by image.onload)

//onload is an event handler in js that runs right after the associated image is loaded completely
image.onload = () => {
    imagesLoaded += 1;
    draw();
};

playerImage.onload = () => {
    imagesLoaded += 1;
    draw();
};

window.addEventListener('keydown', (e) => {
    console.log('go');
});
