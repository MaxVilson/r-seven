/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'src/scss/fonts.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    "./src/museosanscyrl-100-webfont.woff": "fonts/",
    "./src/museosanscyrl-100-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-100italic-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-100italic-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-300-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-300-webfont": "fonts/",
    "./src/fonts/museosanscyrl-300italic-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-300italic-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-500-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-500-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-500italic-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-500italic-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-700-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-700-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-700italic-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-700italic-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-900-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-900-webfont.woff2": "fonts/",
    "./src/fonts/museosanscyrl-900italic-webfont.woff": "fonts/",
    "./src/fonts/museosanscyrl-900italic-webfont.woff2": "fonts/",
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
