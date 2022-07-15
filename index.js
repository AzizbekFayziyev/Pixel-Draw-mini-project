"use strict"

// .px elements create func
const elements = () => {

    const cnt = document.querySelector(".container");

    for (let i = 0; i < 800; i++) {

        let px = document.createElement("span");
        px.className = "px";

        document.body.appendChild(px);
        cnt.appendChild(px);

    };

};

elements();

// Pixel Draw func
const px = document.querySelectorAll(".px");
px.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("draw")
    })
});

