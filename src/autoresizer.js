/**
 * @file Automatically resize the iframe of an LTI tool
 * @author Renaat De Muynck <renaat.demuynck@gmail.com>
 * @license MIT
 */

import ResizeObserver from 'resize-observer-polyfill';
import Messenger from 'lti-messaging';

function resizeHandler() {
    var height = Math.round(document.documentElement.getBoundingClientRect().height);
    
    Messenger.frameResize(height);
}

export default {
    
    init: function () {
        // Don't run if not in iframe
        if (window.parent === window) return;
        
        document.addEventListener('DOMContentLoaded', function () {
            const resizeObserver = new ResizeObserver(resizeHandler);
            
            // Request iframe resize when body changes size
            resizeObserver.observe(document.body);
        });
    }
    
};
