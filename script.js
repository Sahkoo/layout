let headerSearchInput = document.querySelector(".header-search")
let headerIcon = document.querySelector(".header-icon")

let blockImage = document.querySelector(".block-image")
let starBlock = document.querySelector(".star")
let blocks = document.querySelector(".blocks")
let photoText = document.querySelector(".photo-text")

let headerText = "header";
let sustainabilityText = "sustainability";
let imagesText = "images";
let pricesText = "prices";

let search = [headerText, sustainabilityText, imagesText, pricesText]

headerIcon.addEventListener("click", function () {
    let enterValue = headerSearchInput.value.toLowerCase();

    for (let i = 0; i < search.length; i++) {
        if (enterValue === search[0]) {
            blockImage.style.backgroundColor = "#000";
        } else if (enterValue === search[1]) {
            starBlock.style.backgroundColor = "#000";
        } else if (enterValue === search[2]) {
            blocks.style.backgroundColor = "#000";
        } else if (enterValue === search[3]) {
            photoText.style.backgroundColor = "#000";
        }
    }
});





/* headerIcon.addEventListener("click", function () {
    if (headerSearchInput.className === "header-search") {
        headerSearchInput.classList.add("new")
    } else {
        headerSearchInput.classList.remove("new")
    }
}) */