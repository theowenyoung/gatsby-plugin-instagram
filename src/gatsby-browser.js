const injectScript = () => {
  var js = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  js.id = 'gatsby-plugin-instagram';
  js.src = 'https://instagram.com/embed.js';
  firstScript.parentNode.insertBefore(js, firstScript);
  return true;

}

let injected = false

const embedClasses = [
  `.instagram-media`,
].join(`,`)

exports.onRouteUpdate = () => {
  if (document.querySelector(embedClasses) !== null) {
    if (!injected) {
      injectScript()
      injected = true
    }
    if (
      typeof instgrm !== `undefined` &&
      window.instgrm.Embeds &&
      typeof window.instgrm.Embeds.process === `function`
    ) {
      // manual process
      window.instgrm.Embeds.process()
    }
  }
}
