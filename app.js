function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}

//change letters independently
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function () {
    for (let letters of letters) {
        letters.style.color = randomRGB();
    }
}, 2000);