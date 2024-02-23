chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "doYourThing",
    title: "Do your thing",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "nextPage",
    title: "Next Page",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "openGithub",
    title: "Open Github",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "doYourThing") {
    // Implement your functionality here for "Do your thing"
    window.alert(document.querySelector("#content-root-cashboxindex > div.row.wrapper.border-bottom.white-bg.page-heading > div.col-sm-10 > h2").textContent);
  } else if (info.menuItemId === "nextPage") {
    // Switch to the next tab
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const currentIndex = tabs.findIndex((t) => t.id === tab.id);
      const nextIndex = (currentIndex + 1) % tabs.length;
      const nextTab = tabs[nextIndex];
      chrome.tabs.update(nextTab.id, { active: true });
    });
  } else if (info.menuItemId === "openGithub") {
    // Find the first tab containing "github.com" and switch to it
    chrome.tabs.query({ url: "*://github.com/*" }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.update(tabs[0].id, { active: true });
      } else {
        // If no tab found, open a new tab with GitHub
        chrome.tabs.create({ url: "https://github.com" });
      }
    });
  }
});
