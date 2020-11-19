const youtube_url = 'https://www.youtube.com/watch?'
const search = 'page';
const width = 960;
const height = 540;
var counter = 1;
var lastTabId = -1;

// on Extension Icon Clicked
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    currentTab = tabs[0];
    currentTabId = currentTab.id;
    try{
      // Validation
      if (!currentTab.url.includes(youtube_url)){
        throw currentTab.url;
      }
      // send to local MiniYoutube App
      youtube_id = currentTab.url.split('?')[1].split('v=')[1].split('&')[0];
      chrome.tabs.update(currentTabId, {url:`youtube://${width}/${height}/${youtube_id}`})
    }
    catch(e){
      alert(`current tab is valid URL \n URL:${currentTab.url}`);
    }
  });
});