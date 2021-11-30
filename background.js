chrome.browserAction.onClicked.addListener(function (tab) {

    var tablink;
    chrome.tabs.getSelected(null, function (tab) {
        tablink = tab.url;
        chrome.tabs.update({url: "https://outline.com/"+tablink});
    });
    // console.log(tablink);
    // console.log("Funcionando!");
});