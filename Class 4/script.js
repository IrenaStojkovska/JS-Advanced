let colorInput = document.getElementById("colorInput");
let textSizeInput = document.getElementById("textSizeInput");
let changeStylesButton = document.getElementById("changeStylesButton");
let text = document.getElementById("text");

let changeElementColor = (element, color) => {
    const s = new Option().style;
    s.color = color;
    if (s.color !== '') {
        element.style.color = color;
    } else {
        element.style.color = "black";
    }
}

let changeElementTextSize = (element, textSize) => {
    let parsedTextSize = parseFloat(textSize);
    if (parsedTextSize) {
        element.style.fontSize = `${parsedTextSize}px`;
    } else {
        element.style.fontSize = "24px";
    }
}

changeStylesButton.addEventListener("click", () => {
    changeElementColor(text, colorInput.value);
    changeElementTextSize(text, textSizeInput.value);
})