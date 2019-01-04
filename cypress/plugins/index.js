module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    // args.push('--use-fake-device-for-media-stream')
    if (browser.name === 'chrome') {
      args.push('--use-fake-ui-for-media-stream')
      args.push('--use-fake-device-for-media-stream')
      args.push('--use-file-for-fake-video-capture=cypress/fixtures/akiyo_cif.y4m')
    }
    
    return args
  })
}
