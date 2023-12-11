browser.runtime.onMessage.addListener((request) => {
  if (request.action === 'updateWhitelistLink') {
    const linkText = request.isWhitelisted
      ? 'REMOVE FROM WHITELIST'
      : '+ ADD TO WHITELIST'
    browser.browserAction.setBadgeText({ text: linkText })
  }
})
