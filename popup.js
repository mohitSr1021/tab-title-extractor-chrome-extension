const btn = document.querySelector("#fetchTitleBtn");
const currentTabTitle = document.querySelector("#tabTitle");
const titleContainer = document.querySelector("#title-container");


// Extract the current tab title logic
btn.addEventListener("click", async () => {
  let [currentTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  if (currentTab) {
    titleContainer.style.display = "flex";
    currentTabTitle.textContent = currentTab.title;
  }
});


// Copy Button logic
document.getElementById("copyBtn").addEventListener("click", () => {
  const tabTitle = document.getElementById("tabTitle").textContent;
  navigator.clipboard
    .writeText(tabTitle)
    .then(() => {
      alert("Tab title copied to clipboard 0_0!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
