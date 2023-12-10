import './popup.css'

document.addEventListener('DOMContentLoaded', () => {
  const reloadIcon = document.getElementById('reloadIcon')

  if (reloadIcon) {
    reloadIcon.addEventListener('click', () => {
      browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        const activeTab = tabs[0]
        if (activeTab.id) {
          browser.tabs.reload(activeTab.id)
        }
      })
    })
  }
})

const extractDomain = (url: string): string | null => {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/?]+)/)
  return match ? match[1] : null
}

const updateTabInfo = (): void => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const activeTab = tabs[0]
    if (activeTab.url) {
      const domain = extractDomain(activeTab.url)
      const urlElement = document.getElementById('currentDomain')
      if (urlElement) {
        urlElement.textContent = domain || ''
      }
    }
  })
}

updateTabInfo()

browser.tabs.onActivated.addListener(() => {
  updateTabInfo()
})
