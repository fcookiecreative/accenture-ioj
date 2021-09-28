
const stableBlockMobile = document.getElementsByClassName("ioj-stable-operations-mobile")[0];
const stableMoreLink = stableBlockMobile.getElementsByClassName("more")[0];
const stableBackBlock = stableBlockMobile.getElementsByClassName("ioj-operation-images")[0];
const stableMoreBlock = stableBlockMobile.getElementsByClassName("ioj-left")[0];
const stableBackLink = stableBlockMobile.getElementsByClassName("back")[0];
stableMoreLink.addEventListener("click", event => {
    stableBackBlock.style.display = "block";
    stableMoreBlock.style.display = "none";
    stableBlockMobile.classList.add("ioj-mobile-modal")
});

stableBackLink.addEventListener("click", event => {
    stableMoreBlock.style.display = "block";
    stableBackBlock.style.display = "none";
    stableBlockMobile.classList.remove("ioj-mobile-modal")
});


const efficientBlockMobile = document.getElementsByClassName("ioj-efficient-operations-mobile")[0];
const efficientMoreLink = efficientBlockMobile.getElementsByClassName("more")[0];
const efficientBackBlock = efficientBlockMobile.getElementsByClassName("ioj-operation-images")[0];
const efficientMoreBlock = efficientBlockMobile.getElementsByClassName("ioj-left")[0];
const efficientBackLink = efficientBlockMobile.getElementsByClassName("back")[0];
efficientMoreLink.addEventListener("click", event => {
    efficientBackBlock.style.display = "block";
    efficientMoreBlock.style.display = "none";
    efficientBlockMobile.classList.add("ioj-mobile-modal")
});

efficientBackLink.addEventListener("click", event => {
    efficientMoreBlock.style.display = "block";
    efficientBackBlock.style.display = "none";
    efficientBlockMobile.classList.remove("ioj-mobile-modal")
});


const predictiveBlockMobile = document.getElementsByClassName("ioj-predictive-operations-mobile")[0];
const predictiveMoreLink = predictiveBlockMobile.getElementsByClassName("more")[0];
const predictiveBackBlock = predictiveBlockMobile.getElementsByClassName("ioj-operation-images")[0];
const predictiveMoreBlock = predictiveBlockMobile.getElementsByClassName("ioj-left")[0];
const predictiveBackLink = predictiveBlockMobile.getElementsByClassName("back")[0];
predictiveMoreLink.addEventListener("click", event => {
    predictiveBackBlock.style.display = "block";
    predictiveMoreBlock.style.display = "none";
    predictiveBlockMobile.classList.add("ioj-mobile-modal")
});

predictiveBackLink.addEventListener("click", event => {
    predictiveMoreBlock.style.display = "block";
    predictiveBackBlock.style.display = "none";
    predictiveBlockMobile.classList.remove("ioj-mobile-modal")
});

const futureBlockMobile = document.getElementsByClassName("ioj-future-operations-mobile")[0];
const futureMoreLink = futureBlockMobile.getElementsByClassName("more")[0];
const futureBackBlock = futureBlockMobile.getElementsByClassName("ioj-operation-images")[0];
const futureMoreBlock = futureBlockMobile.getElementsByClassName("ioj-left")[0];
const futureBackLink = futureBlockMobile.getElementsByClassName("back")[0];
futureMoreLink.addEventListener("click", event => {
    futureBackBlock.style.display = "block";
    futureMoreBlock.style.display = "none";
    futureBlockMobile.classList.add("ioj-mobile-modal")
});

futureBackLink.addEventListener("click", event => {
    futureMoreBlock.style.display = "block";
    futureBackBlock.style.display = "none";
    futureBlockMobile.classList.remove("ioj-mobile-modal")
});