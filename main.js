
let view = document.getElementById('view');

let image = document.getElementById('image');

view.src = './img/download (7).jpeg';

image.addEventListener("change", () => {

    view.src = URL.createObjectURL(image.files[0]);
})