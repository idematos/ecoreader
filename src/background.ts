// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts

browser.runtime.onMessage.addListener((request, sender) => {
  let message = 'Got no message!'

  if (request.type === 'GREETINGS') {
    message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`
  }

  return Promise.resolve({ message })
})
