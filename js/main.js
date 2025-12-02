var upper = 50;

function randSite() {
	var url = (Math.floor(Math.random()*upper)+1)+'.html'
	window.location.href = url;
};

document.onkeydown = function(event) {
    var currentUrl = window.location.href;
    var numUrl;
    numUrl = Number(currentUrl.match(/[0-9]+/));
    switch (event.key) {
        case "ArrowLeft":
            if (numUrl > 1) {
                var newUrl = (numUrl-1)+'.html'
                window.location.href = newUrl;
            } else {
                var newUrl = (numUrl)+'.html'
                window.location.href = newUrl;
            }
        break;
        case "ArrowRight":
            if (numUrl < upper) {
                var newUrl = (numUrl+1)+'.html'
                window.location.href = newUrl;
            } else {
                var newUrl = (numUrl)+'.html'
                window.location.href = newUrl;
            }
        break;
        case " ":
            randSite();
        break;
    }
};