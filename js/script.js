const centerTop = document.getElementsByClassName("ioj-journey-synops")[0];
const centerBottom = document.getElementsByClassName("ioj-journey-synops-label")[0];
const centerText = document.getElementsByClassName("center-show");
const centerTextItem = document.getElementsByClassName("center-text")[0];
const centerTextAlt = document.querySelectorAll('.center-show');
const len = centerText !== null ? centerText.length : 0;

const showCenterText = () => {
  for (var i=0; i < len; i++) {
    centerText[i].classList.add('show');
  }
}

const hideCenterText = () => { [...centerText].map(x => x.classList.remove('show')); }

centerTop.addEventListener('mouseenter', () => { showCenterText(); });
centerTop.addEventListener('mouseleave', () => { hideCenterText(); });
centerBottom.addEventListener('mouseenter', () => { showCenterText(); });
centerBottom.addEventListener('mouseleave', () => { hideCenterText(); });

centerTextAlt.forEach(item => {
  item.addEventListener('mouseenter', () => { showCenterText(); });
  item.addEventListener('mouseleave', () => { showCenterText(); });
});

centerTextItem.addEventListener('mouseenter', () => { showCenterText(); });
centerTextItem.addEventListener('mouseleave', () => { hideCenterText(); });
/* jQuery code */
jQuery(function () {
  let isDesktop = window.matchMedia('(min-width: 1000px)').matches;
  const $carousel = jQuery('.ioj-carousel');
  const $mobileNavBar = jQuery('.ioj-nav--mobile');
  const $desktopNavBar = jQuery('.ioj-nav--desktop');
  const $journeyParts = jQuery('.ioj-journey-part');
  const $tooltipsHolder = jQuery('.ioj-tooltips');
  const $bubblesButtons = jQuery('.ioj-future-hover');

  /* RESIZE STUFF */
  jQuery(window).on('resize', function() {
    if (!window.matchMedia('(min-width: 1000px)').matches && isDesktop) {
      isDesktop = false;
      const $currentTabLink = $desktopNavBar.find('.ioj-nav-link.active');
      let currentTabTarget = $currentTabLink.data('target');
      if (currentTabTarget === '#ioj-tab-journey') {
        currentTabTarget = '#ioj-tab-stable'
      }
      $mobileNavBar.find('.ioj-nav-link[data-target="' + currentTabTarget + '"]').trigger('click');
    }
    if (window.matchMedia('(min-width: 1000px)').matches && !isDesktop) {
      isDesktop = true;
      const $currentTabLink = $mobileNavBar.find('.ioj-nav-link.active');
      let currentTabTarget = $currentTabLink.data('target');
      $desktopNavBar.find('.ioj-nav-link[data-target="' + currentTabTarget + '"]').trigger('click');
    }
  });
  /* JOURNEY PARTS HOVER */
  $journeyParts.on('mouseenter', function() {
    const $activePart = jQuery(this);
    const tooltipDataPart = '[data-part="#' + $activePart.attr('id') + '"]';
    $carousel.find('.ioj-journey-part.active').removeClass('active');
    $activePart.addClass('active');
    // Tooltips Highlighting
    $tooltipsHolder.find(tooltipDataPart).find('.tooltip-icon').removeClass('tooltip-icon-inactive').addClass('active');
    $tooltipsHolder.find('[data-part]:not(' + tooltipDataPart + ')').find('.tooltip-icon').removeClass('active').addClass('tooltip-icon-inactive');
    // Future 1st Bubbles Highlighting fix
    if ($activePart.attr('id') !== 'ioj-part-future') {
      jQuery('.future-bubble1-off').css({display: 'block'});
    }
  });
  $journeyParts.on('mouseleave', function() {
    $tooltipsHolder.find('.ioj-tooltip').find('.tooltip-icon').removeClass('tooltip-icon-inactive').addClass('active');
    $journeyParts.addClass('active');
    // Future 1st Bubbles Highlighting fix
    jQuery('.future-bubble1-off').css({display: 'none'});
  });
  /*TOOLTIPS HOVER */
  $tooltipsHolder.find('.ioj-tooltip').on('mouseenter', function() {
    const $activeTooltip = jQuery(this);
    const tooltipDataPart = '[data-part="' + $activeTooltip.data('part') + '"]';
    $journeyParts.removeClass('active');

    // duplicate code
    $tooltipsHolder.find(tooltipDataPart).find('.tooltip-icon').removeClass('tooltip-icon-inactive').addClass('active');
    $tooltipsHolder.find('[data-part]:not(' + tooltipDataPart + ')').find('.tooltip-icon').removeClass('active').addClass('tooltip-icon-inactive');

    if ($activeTooltip.data('part') !== '#ioj-part-future') {
      jQuery('.future-bubble1-off').css({display: 'block'});
    }
    jQuery($activeTooltip.data('part')).addClass('active');
  });
  /* FUTURE BUBBLES HOVER */
  $bubblesButtons.on('mouseenter', function() {
    $journeyParts.removeClass('active');
    jQuery('#ioj-part-future').addClass('active');

    $tooltipsHolder.find('[data-part="#ioj-part-future"]').find('.tooltip-icon').removeClass('tooltip-icon-inactive').addClass('active');
    $tooltipsHolder.find('[data-part]:not([data-part="#ioj-part-future"])').find('.tooltip-icon').removeClass('active').addClass('tooltip-icon-inactive');
  });
  /* JOURNEY PARTS CLICKS */
  $journeyParts.on('click', function () {
    const target = jQuery(this).data('target');
    $desktopNavBar.find('.ioj-nav-link[data-target="' + target + '"]').trigger('click');
  });
  /* NAV BUTTONS CLICKS */
  const $iojNavLinks = jQuery('.ioj-nav-link');

  let currentNavClass;

  if (isDesktop) {
    currentNavClass = '.ioj-nav--desktop';
  } else {
    currentNavClass = '.ioj-nav--mobile';
  }

  $iojNavLinks.on('click',function () {
    const $clickedLink = $(this);
    jQuery('.ioj-nav-link.active').removeClass('active');
    jQuery('.ioj-carousel-slide.active').fadeOut(300).removeClass('active');
    setTimeout(function () {
      jQuery($clickedLink.data('target')).fadeIn().addClass('active');
    }, 300);
    $clickedLink.addClass('active');
  });

  const $firstSlideLink = jQuery(currentNavClass + ' .active');
  $firstSlideLink.trigger('click');
  /* ICON BUTTON CLICKS */
  /* reset */
  $carousel.on('click', function (e) {
    if (!jQuery(e.target).closest('.ioj-operations-image-block').length) {
      jQuery('.ioj-operations-image-block.active').removeClass('active').find('.ioj-operation-image-description').fadeOut(300);
    }
  });

  const $operationIconButtons = jQuery('.ioj-operations-image');
  $operationIconButtons.on('click', function () {
    const $currentIconButton = jQuery(this);
    const $currentIconButtonHolder = $currentIconButton.closest('.ioj-operations-image-block');
    const $activeButton = jQuery('.ioj-operations-image-block.active');
    $activeButton.removeClass('active').find('.ioj-operation-image-description').fadeOut(300);
    $currentIconButtonHolder.addClass('active').find('.ioj-operation-image-description').fadeIn(300);
  });

  /* More buttons */
  const $moreButtons = jQuery('.ioj-operations-more-link');
  $moreButtons.on('click', function () {
    const $currentButton = jQuery(this);
    const $currentButtonHolder = $currentButton.closest('.ioj-carousel-slide__content');
    $mobileNavBar.css({opacity: 0});
    jQuery('.ioj-carousel-slide__content.active').removeClass('active');
    $currentButtonHolder.addClass('active');
  });

  /* Close buttons */
  const $closeButtons = jQuery('.ioj-operations-close-button');
  $closeButtons.on('click', function () {
    const $currentButton = jQuery(this);
    const $currentButtonHolder = $currentButton.closest('.ioj-carousel-slide__content');
    $mobileNavBar.css({opacity: 1});
    $currentButtonHolder.removeClass('active');
  });
});