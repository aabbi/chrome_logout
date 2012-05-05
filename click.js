chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.executeScript(tab.id, {file:"jquery-latest.js"});	       
      chrome.tabs.executeScript(tab.id, {file:"back.js"});
});

