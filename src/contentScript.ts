const domain = new URL(window.location.href).hostname

browser.storage.sync.get('whitelist').then((result) => {
  const whitelist = result.whitelist || []

  if (whitelist.includes(domain)) {
    browser.runtime.sendMessage({
      action: 'updateWhitelistLink',
      isWhitelisted: true,
    })
  }
})
