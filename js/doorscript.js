"use strict";


window.addEventListener("load", initialise);

let doorImage;
const knockingSounds = [
    "../sound/knock1.ogg",
    "../sound/knock2.wav",
    "../sound/knock3.wav"
];

function initialise() {
    console.log("init");

    doorImage = document.getElementById("doorImg");

    knockKnock();
}

function knockKnock() {

    console.log("beep");

    doorImage.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * knockingSounds.length);
        const selectedSound = knockingSounds[randomIndex];
    
        const knockingSound = new Audio(selectedSound);
        knockingSound.play();

        if (redirect()) {
            window.location.href = "suprise.html";
        }
    });
}

function redirect() {
    const randomNumber = Math.floor(Math.random() * 50) + 1;

    return randomNumber === 1;
}