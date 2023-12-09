import './popup.css'

document.addEventListener('DOMContentLoaded', () => {
  const reloadIcon = document.getElementById('reloadIcon')

  if (reloadIcon) {
    reloadIcon.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0]
        if (activeTab.id) {
          chrome.tabs.reload(activeTab?.id)
        }
      })
    })
  }
})
