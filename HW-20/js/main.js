"use strict";

$(document).ready(() => {
    const $galItem = $('.js--gal_item');
    const $modal = $('.js--modal');
    const $modalContent = $('.js--modal__content');

    $galItem.on('click', function () {
        const imgSrc = $(this).find('img').attr('src');
        $modalContent.html(`<img src="${imgSrc}" alt="">`);
        $modal.addClass('active');
    });

    $('.js--modal__close').on('click', () => {
        $modal.removeClass('active');
    });

    $('.js--modal__next').on('click', () => navigateGallery(1));

    $('.js--modal__prev').on('click', () => navigateGallery(-1));

    const navigateGallery = (direction) => {
        const currentImgSrc = $modalContent.find('img').attr('src');
        const $currentItem = $galItem.has(`img[src="${currentImgSrc}"]`);
        const $nextItem = $currentItem[direction === 1 ? 'next' : 'prev']();

        if ($nextItem.length > 0) {
            const nextImgSrc = $nextItem.find('img').attr('src');
            $modalContent.find('img').attr('src', nextImgSrc);
        }
    };
});
