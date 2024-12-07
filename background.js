chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetURL = "https://www.youtube.com/watch?v=At8v_Yc044Y";
  
  if (changeInfo.status === "complete") {
    if (tab.url === targetURL) {
      chrome.tabs.update(tabId, { muted: true });
    } else {
      chrome.tabs.update(tabId, { muted: false });
    }
  }
});
