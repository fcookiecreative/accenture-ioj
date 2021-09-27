const journeyTab = document.getElementById("tab-journey");
const stableTab = document.getElementById("tab-stable");
const efficientTab = document.getElementById("tab-efficient");
const predictiveTab = document.getElementById("tab-predictive");
const futureTab = document.getElementById("tab-future");

const journeyTabBody = document.getElementsByClassName("ioj-journey")[0];
const stableTabBody = document.getElementsByClassName("ioj-stable-operations")[0];
const efficientTabBody = document.getElementsByClassName("ioj-efficient-operations")[0];
const predictiveTabBody = document.getElementsByClassName("ioj-predictive-operations")[0];
const futureTabBody = document.getElementsByClassName("ioj-future-operations")[0];

const resetTabs = () => {
    let allSlides = document.getElementsByClassName("ioj-carousel-slide");
    let len = allSlides.length;
    let allTabsHead = document.getElementsByClassName("ioj-nav")[0];
    let allTabsHeadLi = allTabsHead.getElementsByTagName("li");
    for(var i=0; i < len; i++) {
        allSlides[i].style.display= "none";
    }
    [...allTabsHeadLi].map(x => x.classList.remove('active'));
};

journeyTab.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabs();
    currentElement.parentNode.classList.add("active");
    journeyTabBody.style.display = "block";
});

stableTab.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabs();
    currentElement.parentNode.classList.add("active");
    stableTabBody.style.display = "block";
});

efficientTab.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabs();
    currentElement.parentNode.classList.add("active");
    efficientTabBody.style.display = "block";
});

predictiveTab.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabs();
    currentElement.parentNode.classList.add("active");
    predictiveTabBody.style.display = "block";
});

futureTab.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabs();
    currentElement.parentNode.classList.add("active");
    futureTabBody.style.display = "block";
});


// navigate to correct tab on click start
const stableSection = document.getElementsByClassName("ioj-journey-stable")[0];

stableSection.addEventListener("click", event => {
    resetTabs();
    stableTab.parentNode.classList.add("active");
    stableTabBody.style.display = "block";
});

const predictiveSection = document.getElementsByClassName("ioj-journey-predictive")[0];

predictiveSection.addEventListener("click", event => {
    resetTabs();
    predictiveTab.parentNode.classList.add("active");
    predictiveTabBody.style.display = "block";
});

const efficientSection = document.getElementsByClassName("ioj-journey-efficient")[0];

efficientSection.addEventListener("click", event => {
    resetTabs();
    efficientTab.parentNode.classList.add("active");
    efficientTabBody.style.display = "block";
});

const futureSection = document.getElementsByClassName("ioj-journey-future")[0];

futureSection.addEventListener("click", event => {
    resetTabs();
    futureTab.parentNode.classList.add("active");
    futureTabBody.style.display = "block";
});

// navigate to correct tab on click start


// Tabs mobile js start

const stableTabMobile = document.getElementById("tab-stable-mobile");
const efficientTabMobile = document.getElementById("tab-efficient-mobile");
const predictiveTabMobile = document.getElementById("tab-predictive-mobile");
const futureTabMobile = document.getElementById("tab-future-mobile");

const stableTabBodyMobile = document.getElementsByClassName("ioj-stable-operations-mobile")[0];
const efficientTabBodyMobile = document.getElementsByClassName("ioj-efficient-operations-mobile")[0];
const predictiveTabBodyMobile = document.getElementsByClassName("ioj-predictive-operations-mobile")[0];
const futureTabBodyMobile = document.getElementsByClassName("ioj-future-operations-mobile")[0];

const resetTabsMobile = () => {
    let allSlides = document.getElementsByClassName("ioj-carousel-slide-mobile");
    let len = allSlides.length;
    let allTabsHead = document.getElementsByClassName("ioj-nav-mobile")[0];
    let allTabsHeadLi = allTabsHead.getElementsByTagName("li");
    for(var i=0; i < len; i++) {
        allSlides[i].style.display= "none";
    }
    [...allTabsHeadLi].map(x => x.classList.remove('active'));
};

stableTabMobile.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabsMobile();
    currentElement.parentNode.classList.add("active");
    stableTabBodyMobile.style.display = "block";
});

efficientTabMobile.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabsMobile();
    currentElement.parentNode.classList.add("active");
    efficientTabBodyMobile.style.display = "block";
});

predictiveTabMobile.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabsMobile();
    currentElement.parentNode.classList.add("active");
    predictiveTabBodyMobile.style.display = "block";
});

futureTabMobile.addEventListener("click", event => {
    let currentElement = event.target;
    resetTabsMobile();
    currentElement.parentNode.classList.add("active");
    futureTabBodyMobile.style.display = "block";
});

// Tabs mobile js end