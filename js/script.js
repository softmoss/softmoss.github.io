"use strict";


window.addEventListener("load", initialise);

let container;
let searchInput;
let doorImage;

const knockingSounds = [
    "../sound/knock1.ogg",
    "../sound/knock2.wav",
    "../sound/knock3.wav"
];

function initialise() {
    console.log("init");

    container = document.querySelector(".update-container");
    searchInput = document.getElementById("search");
    doorImage = document.getElementById("doorImage");

    fillUpdateContainer();
    addSearchFunctionality();
}

async function fillUpdateContainer() {
    console.log("if you read this, hiiii :) helllo!!!");
    container.innerHTML = "";

    updates.reverse();

    updates.forEach(update => {
        const updateCode = document.createElement("code");
        updateCode.classList.add("update-item");

        const titleElement = document.createElement("h3");
        titleElement.innerText = update.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = update.description;

        const dividerElement = document.createElement("p");
        dividerElement.innerText = update.divider;

        updateCode.appendChild(titleElement);
        updateCode.appendChild(descriptionElement);
        updateCode.appendChild(dividerElement);

        container.appendChild(updateCode);
    });
}

function addSearchFunctionality() {
    console.log("hi is this thing on");
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.toLowerCase();

            if (searchTerm === "door") {
                window.location.href = "docs/door.html";
            }
            else if (searchTerm === "about") {
                window.location.href = "docs/about.html"
            }
            else if (searchTerm === "contact") {
                window.location.href = "docs/contact.html"
            }  
            else {
                searchInput.value = "";
                searchInput.placeholder = "nothing happened";
            }
        }
    });
}



