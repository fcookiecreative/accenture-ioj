const centerTop = document.getElementsByClassName("ioj-journey-synops")[0];
const centerBottom = document.getElementsByClassName("ioj-journey-synops-label")[0];
const centerText = document.getElementsByClassName("center-show");
const centerTextItem = document.getElementsByClassName("center-text")[0];
const centerTextAlt = document.querySelectorAll('.center-show');
const len = centerText !== null ? centerText.length : 0;

const showCenterText = () => {
    for(var i=0; i < len; i++) {
        centerText[i].classList.add('show');
    }
}

const hideCenterText = () => {
    [...centerText].map(x => x.classList.remove('show'));
}

centerTop.addEventListener('mouseenter', () => {
    showCenterText();
});

centerTop.addEventListener('mouseleave', () => {
    hideCenterText();
});

centerBottom.addEventListener('mouseenter', () => {
    showCenterText();
});

centerBottom.addEventListener('mouseleave', () => {
    hideCenterText();
});



centerTextAlt.forEach(item => {
    item.addEventListener('mouseenter', event => {
        showCenterText();
    });

    item.addEventListener('mouseleave', event => {
        showCenterText();
    });
});

centerTextItem.addEventListener('mouseenter', () => {
    showCenterText();
});

centerTextItem.addEventListener('mouseleave', () => {
    hideCenterText();
});