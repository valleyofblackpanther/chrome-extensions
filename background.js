console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

let msg = {
    txt: "hello"
}

function buttonClicked(tab) {
    chrome.tabs.sendMessage(tab.id, msg);
}