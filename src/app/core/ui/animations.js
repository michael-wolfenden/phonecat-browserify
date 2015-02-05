'use strict';

var jQuery = require('jquery');

module.exports = function () {
    return {
        addClass: animateUp,
        removeClass: animateDown
    }
};

function animateUp(element, className, done) {
    if (className !== 'active') {
        return;
    }
    console.log('animateUp');

    element.css({
        position: 'absolute',
        top: 500,
        left: 0,
        display: 'block'
    });

    jQuery(element).animate({
        top: 0
    }, done);

    return function (cancel) {
        if (cancel) {
            element.stop();
        }
    };
}

function animateDown(element, className, done) {
    if (className !== 'active') {
        return;
    }
    console.log('animateDown');

    element.css({
        position: 'absolute',
        left: 0,
        top: 0
    });

    jQuery(element).animate({
        top: -500
    }, done);

    return function (cancel) {
        if (cancel) {
            element.stop();
        }
    };
}