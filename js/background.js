var param = "https://goo.gl/IUwc4R";

chrome.browserAction.onClicked.addListener(function (tab) {

    // content script
    chrome.tabs.executeScript(tab.id, {
        code: "var config = {param:'" + this.param + "'};"
    }, function () {
        chrome.tabs.executeScript(tab.id, {file: 'js/otroScript.js'});
    });



    //parent script
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        var notification = new Notification('Una notificación!', {
            icon: 'images/grumpy.jpg',
            body: "Esta es una notificación de ejemplo",
        });

        notification.onclick = function () {
            window.open('https://www.google.com');
        };
    }
});
