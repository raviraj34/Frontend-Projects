const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");


const redvaluespan = document.getElementById("redvalue");
const greenvaluespan = document.getElementById("greenvalue");
const bluevaluespan = document.getElementById("bluevalue");


const colorBox = document.getElementById("color-box");
const colorButton = document.getElementById("copyButton");
const inputTyprRGBValue = document.getElementById("inputType");


redSlider.addEventListener('input',updatecolor);
greenSlider.addEventListener('input',updatecolor);
blueSlider.addEventListener('input',updatecolor);
copyButton.addEventListener('click',copyRGBValue);


function updatecolor(){

    const redvalue = redSlider.value;
    const greenvalue = greenSlider.value;
    const bluevalue = blueSlider.value;


    const rgbcolor = `rgb(${redvalue}, ${greenvalue},${bluevalue})`;


    colorBox.style.backgroundColor = rgbcolor;
    redvaluespan.textContent = redvalue;
    greenvaluespan.textContent = greenvalue;
    bluevaluespan.textContent = bluevalue;


    inputTyprRGBValue.textContent = rgbcolor;
}

updatecolor();





function copyRGBValue(){


    const redvalue = redSlider.value;
    const greenvalue = greenSlider.value;
    const bluevalue = blueSlider.value;


    const rgbcolor = `rgb(${redvalue}, ${greenvalue},${bluevalue})`;

    navigator.clipboard.writeText(rgbcolor)
    .then(()=>{
        alert("RGB color value copied to clipboard" + rgbcolor);
    })
    .catch((error)=>{
        console.error("failed to copy to clipboard:"+rgbcolor);
    });


}