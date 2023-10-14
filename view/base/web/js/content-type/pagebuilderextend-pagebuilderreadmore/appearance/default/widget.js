define([
    'jquery'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element),
            readmoreElem = `<div class="readmore-wrapper"><span class="readmore">Read More</span></div>`;

        element.removeClass('not-enabled');

        if($(element).parent().hasClass('pagebuilder-content-type-container-readmore')) {
            $(element).parent().append(readmoreElem)
        } else {
            element.append(readmoreElem)
        }

        $(element).parent().click(function(event) {
            if($(event.target).hasClass('readmore')) {
                if($(this).find('.readmore-wrapper span').text() == 'Read More') {
                    $(this).find('.readmore-wrapper span').text('Read Less')
                    element.addClass('active')
                } else {
                    $(this).find('.readmore-wrapper span').text('Read More')
                    element.removeClass('active')
                }
            }

        });

    };
});
