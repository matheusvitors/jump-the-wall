chrome.action.onClicked.addListener((tab) => {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const PROVIDER = "https://leiaisso.net/";
        // const PROVIDER = "https://12ft.io/";

        let url = tabs[0].url;
        console.log(url);
        chrome.tabs.update({url: PROVIDER + url});
        // chrome.tabs.update({url: +url});

    });

});