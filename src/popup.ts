import './popup.css'

document.addEventListener('DOMContentLoaded', () => {
  const reloadIcon = document.getElementById('reloadIcon')

  if (reloadIcon) {
    reloadIcon.addEventListener('click', () => {
      browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        const activeTab = tabs[0]
        if (activeTab.id) {
          browser.tabs.reload(activeTab.id)
          reloadIcon.hidden = true
        }
      })
    })
  }

  const statusCheckbox = document.getElementById(
    'statusCheckbox'
  ) as HTMLInputElement

  if (statusCheckbox) {
    browser.storage.sync.get(['status']).then((result) => {
      statusCheckbox.checked = result.status || true
    })

    statusCheckbox.addEventListener('click', () => {
      browser.storage.sync.set({ status: !statusCheckbox.checked })

      document.getElementById('switch-label-on')!.style.color =
        statusCheckbox.checked ? 'var(--green)' : 'var(--cold-gray)'

      if (reloadIcon?.hidden) reloadIcon.hidden = false
    })
  }
})

const extractDomain = (url: string): string | null => {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/?]+)/)
  return match ? match[1] : null
}

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
