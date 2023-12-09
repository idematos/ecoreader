import './popup.css'

document.addEventListener('DOMContentLoaded', () => {
  const reloadIcon = document.getElementById('reloadIcon')

  if (reloadIcon) {
    reloadIcon.addEventListener('click', () => {
      browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        const activeTab = tabs[0]
        if (activeTab.id) {
          browser.tabs.reload(activeTab?.id)
        }
      })
    })
  }
})
