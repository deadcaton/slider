/**
 * ...
 */
var slider = {
    settings: {
        autoGo: true
    },

    items: [],

    Go: function () {

    },

    Prev: function () {
        console.log('назад');
    },

    Next: function () {
        console.log('вперед');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var sliderEl = document.getElementById('sliderEl'),
        buttons = sliderEl.getElementsByClassName('slider_buttons')[0];

    buttons.getElementsByClassName('slider_button-prev')[0].addEventListener('click', slider.Prev);
    buttons.getElementsByClassName('slider_button-next')[0].addEventListener('click', slider.Next);
});