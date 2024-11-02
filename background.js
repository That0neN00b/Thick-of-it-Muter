chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetURL = "https://www.youtube.com/watch?v=At8v_Yc044Y";
  
  // Check if the tab is fully loaded and matches the target URL
  if (changeInfo.status === "complete") {
    if (tab.url === targetURL) {
      // Mute the tab when on the specific video
      chrome.tabs.update(tabId, { muted: true });
    } else {
      // Unmute the tab if the URL is different
      chrome.tabs.update(tabId, { muted: false });
    }
  }
});
