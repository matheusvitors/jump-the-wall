chrome.action.onClicked.addListener((tab) => {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log(url);
        chrome.tabs.update({url: "https://12ft.io/"+url});

    });

});