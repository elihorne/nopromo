function hider() {
	$('.promoted').hide();
	$('.promoted-tweet').hide();
	$('.promoted-account').hide();
}

function listener() {
    hider();
}

var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 100);
}, false);