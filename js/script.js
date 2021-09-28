const imageText = document.querySelectorAll('.image-column');
const wrapper = document.getElementsByClassName('ioj-carousel')[0];
wrapper.addEventListener("click", event => {
    const allIcons = document.querySelectorAll(".image-column");
    allIcons.forEach(item => {
        item.classList.remove("show");
    });
}, false);

imageText.forEach(item => {
    item.addEventListener('click', event => {
        const allIconsExceptCurrent = document.querySelectorAll(".image-column:not(this)");
        allIconsExceptCurrent.forEach(item => {
            item.classList.remove("show");
        });
        event.currentTarget.classList.toggle("show");
        event.stopPropagation();
    }, false);
});

const tooltip1 = $('.tooltip-dollar .tooltip-icon');
const tooltip2 = $('.tooltip-check .tooltip-icon');
const tooltip3 = $('.tooltip-smiley .tooltip-icon');
const tooltip4 = $('.tooltip-badge .tooltip-icon');
const tooltip5 = $('.tooltip-gear .tooltip-icon');
const tooltip6 = $('.tooltip-tag .tooltip-icon');
const tooltip7 = $('.tooltip-graph .tooltip-icon');
const tooltip8 = $('.tooltip-thumb .tooltip-icon');
const tooltip9 = $('.tooltip-thumb-future .tooltip-icon');
const tooltip10 = $('.tooltip-person .tooltip-icon');
const tooltip11 = $('.tooltip-star .tooltip-icon');

const futureHover1 = $('.future-hover1');
const futureHover2 = $('.future-hover2');
const futureHover3 = $('.future-hover3');
const futureHover4 = $('.future-hover4');
const futureBubble1 = $('.future-bubble1');
const futureBubble1Off = $('.future-bubble1-off');

const box1 = document.getElementsByClassName('ioj-journey-stable')[0];
const box2 = document.getElementsByClassName('ioj-journey-predictive')[0];
const box3 = document.getElementById('box3-svg');
const box4 = document.getElementById('box4-svg');

const box3Container = document.getElementsByClassName('ioj-journey-efficient')[0];
const box4Container = document.getElementsByClassName('ioj-journey-future')[0];

const centerTop = document.getElementsByClassName("ioj-journey-synops")[0];
const centerBottom = document.getElementsByClassName("ioj-journey-synops-label")[0]; 
const centerText = document.getElementsByClassName("center-show");
const centerTextItem = document.getElementsByClassName("center-text")[0];
const centerTextAlt = document.querySelectorAll('.center-show');
const len = centerText !== null ? centerText.length : 0;

box1.addEventListener('mouseenter', () => {
    stableOn();
});

box1.addEventListener('mouseleave', () => {
    stableReset();
});

tooltip1.on('mouseenter', () => {
    stableOn();
});
tooltip2.on('mouseenter', () => {
    stableOn();
});

tooltip1.on('mouseleave', () => {
    stableReset();
});
tooltip2.on('mouseleave', () => {
    stableReset();
});

box2.addEventListener('mouseenter', () => {
    predictiveOn();
});

box2.addEventListener('mouseleave', () => {
    predictiveReset();
});
tooltip6.on('mouseenter', () => {
    predictiveOn();
});
tooltip7.on('mouseenter', () => {
    predictiveOn();
});
tooltip8.on('mouseenter', () => {
    predictiveOn();
});

tooltip6.on('mouseleave', () => {
    predictiveReset();
});
tooltip7.on('mouseleave', () => {
    predictiveReset();
});
tooltip8.on('mouseleave', () => {
    predictiveReset();
});

box3Container.addEventListener('mouseenter', () => {
    efficientOn();
});

box3Container.addEventListener('mouseleave', () => {
    efficientReset();
});

tooltip3.on('mouseenter', () => {
    efficientOn();
});
tooltip4.on('mouseenter', () => {
    efficientOn();
});
tooltip5.on('mouseenter', () => {
    efficientOn();
});

tooltip3.on('mouseleave', () => {
    efficientReset();
});
tooltip4.on('mouseleave', () => {
    efficientReset();
});
tooltip5.on('mouseleave', () => {
    efficientReset();
});

box4Container.addEventListener('mouseenter', () => {
    futureOn();
});

box4Container.addEventListener('mouseleave', () => {
    futureReset();
});

tooltip9.on('mouseenter', () => {
    futureOn();
});
tooltip10.on('mouseenter', () => {
    futureOn();
});
tooltip11.on('mouseenter', () => {
    futureOn();
});

futureHover1.on('mouseenter', () => {
    futureOn();
});
futureHover2.on('mouseenter', () => {
    futureOn();
});
futureHover3.on('mouseenter', () => {
    futureOn();
});
futureHover4.on('mouseenter', () => {
    futureOn();
});
futureBubble1.on('mouseenter', () => {
    futureOn();
});

tooltip9.on('mouseleave', () => {
    futureReset();
});
tooltip10.on('mouseleave', () => {
    futureReset();
});
tooltip11.on('mouseleave', () => {
    futureReset();
});

futureHover1.on('mouseleave', () => {
    futureReset();
});
futureHover2.on('mouseleave', () => {
    futureReset();
});
futureHover3.on('mouseleave', () => {
    futureReset();
});
futureHover4.on('mouseleave', () => {
    futureReset();
});
futureBubble1.on('mouseleave', () => {
    futureReset();
});

function stableOn(){
    box2.classList.add('hovered');
    box3Container.classList.add('hovered');
    box4Container.classList.add('hovered');

    tooltip3.addClass('tooltip-icon-inactive')
    tooltip4.addClass('tooltip-icon-inactive')
    tooltip5.addClass('tooltip-icon-inactive')
    tooltip6.addClass('tooltip-icon-inactive')
    tooltip7.addClass('tooltip-icon-inactive')
    tooltip8.addClass('tooltip-icon-inactive')
    tooltip9.addClass('tooltip-icon-inactive')
    tooltip10.addClass('tooltip-icon-inactive')
    tooltip11.addClass('tooltip-icon-inactive')

    futureBubble1.hide();
    futureBubble1Off.show();
}

function stableReset(){
    box2.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
}

function efficientOn(){
    box2.classList.add('hovered');
    box1.classList.add('hovered');
    box4Container.classList.add('hovered');

    tooltip1.addClass('tooltip-icon-inactive')
    tooltip2.addClass('tooltip-icon-inactive')
    tooltip6.addClass('tooltip-icon-inactive')
    tooltip7.addClass('tooltip-icon-inactive')
    tooltip8.addClass('tooltip-icon-inactive')
    tooltip9.addClass('tooltip-icon-inactive')
    tooltip10.addClass('tooltip-icon-inactive')
    tooltip11.addClass('tooltip-icon-inactive')

    futureBubble1.hide();
    futureBubble1Off.show();
}

function efficientReset(){
    box2.classList.remove('hovered')
    box1.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
}

function predictiveOn(){
    box1.classList.add('hovered');
    box3Container.classList.add('hovered');
    box4Container.classList.add('hovered');
    
    tooltip1.addClass('tooltip-icon-inactive')
    tooltip2.addClass('tooltip-icon-inactive')
    tooltip3.addClass('tooltip-icon-inactive')
    tooltip4.addClass('tooltip-icon-inactive')
    tooltip5.addClass('tooltip-icon-inactive')
    tooltip9.addClass('tooltip-icon-inactive')
    tooltip10.addClass('tooltip-icon-inactive')
    tooltip11.addClass('tooltip-icon-inactive')

    futureBubble1.hide();
    futureBubble1Off.show();
}

function predictiveReset(){
    box1.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
}
function futureOn(){
    box2.classList.add('hovered');
    box3Container.classList.add('hovered');
    box1.classList.add('hovered');

    tooltip1.addClass('tooltip-icon-inactive')
    tooltip2.addClass('tooltip-icon-inactive')
    tooltip3.addClass('tooltip-icon-inactive')
    tooltip4.addClass('tooltip-icon-inactive')
    tooltip5.addClass('tooltip-icon-inactive')
    tooltip6.addClass('tooltip-icon-inactive')
    tooltip7.addClass('tooltip-icon-inactive')
    tooltip8.addClass('tooltip-icon-inactive')
}

function futureReset(){
    box2.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box1.classList.remove('hovered')

    resetIcons();
}

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


/* icons reset */

function resetIcons(){
    tooltip1.removeClass('tooltip-icon-inactive')
    tooltip2.removeClass('tooltip-icon-inactive')
    tooltip3.removeClass('tooltip-icon-inactive')
    tooltip4.removeClass('tooltip-icon-inactive')
    tooltip5.removeClass('tooltip-icon-inactive')
    tooltip6.removeClass('tooltip-icon-inactive')
    tooltip7.removeClass('tooltip-icon-inactive')
    tooltip8.removeClass('tooltip-icon-inactive')
    tooltip9.removeClass('tooltip-icon-inactive')
    tooltip10.removeClass('tooltip-icon-inactive')
    tooltip11.removeClass('tooltip-icon-inactive')

    futureBubble1.show();
    futureBubble1Off.hide();
}


