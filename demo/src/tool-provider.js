import IFrameResizer from 'lti-iframe-autoresizer';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

IFrameResizer.init();

document.addEventListener('DOMContentLoaded', function () {
    var updateButton = document.getElementById('updateButton'),
        content = document.getElementById('content');
    
    updateButton.addEventListener('click', function () {
        var items = '',
            height = 120;
        
        for (let i = 0, l = getRandomInt(10); i < l; i++) {
            items += '<li>List item ' + (i + 1) + '</li>';
        }
        
        content.innerHTML = items;
    });
});
