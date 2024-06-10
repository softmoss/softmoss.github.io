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

        const dateOfUpdate = document.createElement("p");
        dateOfUpdate.innerText = update.date;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = update.description;

        const dividerElement = document.createElement("p");
        dividerElement.innerText = update.divider;
        dividerElement.style.textAlign = "center";

        updateCode.appendChild(titleElement);
        updateCode.appendChild(dateOfUpdate);
        updateCode.appendChild(descriptionElement);
        updateCode.appendChild(dividerElement);

        container.appendChild(updateCode);
    });
}

function addSearchFunctionality() {
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.toLowerCase();

            if (searchTerm === "door" || searchTerm === "jimmy") {
                window.location.href = "door.html";
            }
            else if (searchTerm === "about") {
                window.location.href = "about.html"
            }
            else if (searchTerm === "contact") {
                window.location.href = "contact.html"
            }
            else if (searchTerm === "animation" || searchTerm === "art") {
                window.location.href = "animation.html"
            }  
            else if (searchTerm === "ceramic" || searchTerm === "ceramics") {
                window.location.href = "ceramics.html"
            } 
            else {
                searchInput.value = "";
                searchInput.placeholder = "nothing happened";
            }
        }
    });
}



