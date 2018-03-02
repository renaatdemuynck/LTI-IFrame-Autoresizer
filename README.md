# LTI IFrame Autoresizer

Automatically resizes the iframe of an LTI tool.

## How it works

Most of the time, LTI tool providers are loaded in an iframe within the tool consumer application. Tool consumers often
listen for 'message' events from the tool provider so they can know when to do certain stuff. 'lti.frameResize' is one
of those requests.

The script uses the new `ResizeObserver` API (or a polyfill if necessary) to detect any change in
size of the tool provider's document. When a resize is detected, it will send a message to the tool consumer using
`postMessage()` requesting to resize the iframe.

## Installation

From NPM:

```sh
npm install lti-iframe-autoresizer
```

From Yarn:

```sh
yarn add lti-iframe-autoresizer
```

You can't just load the script in the browser. It needs to be compiled using *WebPack* or some similar tool.

## Usage Example

On the tool provider side you just import the module and run `init()` and you're done:

```javascript
import LtiResizer from 'lti-iframe-autoresizer';

LtiResizer.init();
```

On the tool consumer side you need to listen for the 'message' event and set the iframe's height if it is an
'lti.frameResize' request:
```javascript
window.addEventListener('message', function (event) {
    var params = JSON.parse(event.data),
        iframe = document.getElementById('iframe');
    
    if (params.subject === 'lti.frameResize') {
        iframe.setAttribute('height', params.height);
    }
});
```

You probably want set `html { overflow: 'hidden'; }` to prevent the short flash of visible scroll bars between
detection of the resize of the content and the actual resize of the iframe.