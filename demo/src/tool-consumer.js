
window.addEventListener('message', function (event) {
    var params = JSON.parse(event.data),
        iframe = document.getElementById('iframe');
    
    console.log(params);
    
    switch (params.subject) {
        case 'lti.frameResize':
            iframe.setAttribute('height', params.height);
            break;
    }
});
