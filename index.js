const red = 64;
const green = 113;
const blue = 145;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor () {
    console.log(window.scrollY);
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;

    header.style.backgroundColor = updatedColor;  
}  
changeColor();

window.addEventListener('scroll', changeColor);
