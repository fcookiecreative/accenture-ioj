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
});

box1.addEventListener('mouseleave', () => {
    box2.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
});

box2.addEventListener('mouseenter', () => {
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
});

box2.addEventListener('mouseleave', () => {
    box1.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
});

box3Container.addEventListener('mouseenter', () => {
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
});

box3Container.addEventListener('mouseleave', () => {
    box2.classList.remove('hovered')
    box1.classList.remove('hovered')
    box4Container.classList.remove('hovered')

    resetIcons();
});

box4Container.addEventListener('mouseenter', () => {
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
});

box4Container.addEventListener('mouseleave', () => {
    box2.classList.remove('hovered')
    box3Container.classList.remove('hovered')
    box1.classList.remove('hovered')

    resetIcons();
});

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


