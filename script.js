let headerSearchInput = document.querySelector(".header-search");
let headerIcon = document.querySelector(".header-icon");

let blockImage = document.querySelector(".block-image");
let blockImageValue = blockImage.outerHTML;
let starBlock = document.querySelector(".star");
let starBlockValue = starBlock.outerHTML;
let blocks = document.querySelector(".blocks");
let blocksValue = blocks.outerHTML;
let photoText = document.querySelector(".photo-text");
let photoTextValue = photoText.outerHTML;

let headerText = "header";
let sustainabilityText = "sustainability";
let imagesText = "images";
let pricesText = "prices";

let search = [headerText, sustainabilityText, imagesText, pricesText];

headerIcon.addEventListener("click", function () {
    let enterValue = headerSearchInput.value.toLowerCase();

    for (let i = 0; i < search.length; i++) {
        if (enterValue === search[i]) {
            switch (search[i]) { 
                case headerText: 
                    sessionStorage.setItem("blockValue", blockImageValue); 
                    break; 
                case sustainabilityText: 
                    sessionStorage.setItem("blockValue", starBlockValue); 
                    break; 
                case imagesText: 
                    sessionStorage.setItem("blockValue", blocksValue); 
                    break; 
                case pricesText: 
                    sessionStorage.setItem("blockValue", photoTextValue); 
                    break; 
            }
            window.location.href = "./search.html";
            return;
        }
    }

    alert("Пошук не дав результатів. Спробуйте інше слово.");
});





/* headerIcon.addEventListener("click", function () {
    if (headerSearchInput.className === "header-search") {
        headerSearchInput.classList.add("new")
    } else {
        headerSearchInput.classList.remove("new")
    }
}) */