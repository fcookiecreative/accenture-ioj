jQuery(document).ready(function () {
  const $carousel = jQuery('.ioj-carousel');
  const $mobileNavBar = jQuery('.ioj-nav--mobile');
  /* NAV BUTTONS CLICKS */
  const $iojNavLinks = jQuery('.ioj-nav-link');

  let currentNavClass;

  if (window.matchMedia('(min-width: 1000px)').matches) {
    currentNavClass = '.ioj-nav--desktop';
  } else {
    currentNavClass = '.ioj-nav--mobile';
  }

  $iojNavLinks.click(function () {
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
  $carousel.click(function (e) {
    if (!jQuery(e.target).closest('.ioj-operations-image-block').length) {
      jQuery('.ioj-operations-image-block.active').removeClass('active').find('.ioj-operation-image-description').fadeOut(300);
    }
  });

  const $operationIconButtons = jQuery('.ioj-operations-image');
  $operationIconButtons.click(function () {
    const $currentIconButton = jQuery(this);
    const $currentIconButtonHolder = $currentIconButton.closest('.ioj-operations-image-block');
    const $activeButton = jQuery('.ioj-operations-image-block.active');
    $activeButton.removeClass('active').find('.ioj-operation-image-description').fadeOut(300);
    $currentIconButtonHolder.addClass('active').find('.ioj-operation-image-description').fadeIn(300);
  });

  /* More buttons */
  const $moreButtons = jQuery('.ioj-operations-more-link');
  $moreButtons.click(function () {
    const $currentButton = jQuery(this);
    const $currentButtonHolder = $currentButton.closest('.ioj-carousel-slide__content');
    $mobileNavBar.css({opacity: 0});
    jQuery('.ioj-carousel-slide__content.active').removeClass('active');
    $currentButtonHolder.addClass('active');
  });

  /* Back buttons */
  const $backButtons = jQuery('.ioj-operations-back-link');
  $backButtons.click(function () {
    const $currentButton = jQuery(this);
    const $currentButtonHolder = $currentButton.closest('.ioj-carousel-slide__content');
    $mobileNavBar.css({opacity: 1});
    $currentButtonHolder.removeClass('active');
  });
});