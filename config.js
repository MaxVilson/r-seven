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
    '../../node_modules/swiper/css/swiper.min.css',
    '../../node_modules/mmenu-light/dist/mmenu-light.css',
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
    "src/fonts/MUSEOSANSCYRL-100.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-100.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-100Italic.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-100Italic.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-300.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-300.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-300Italic.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-300Italic.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-500.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-500.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-500Italic.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-500Italic.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-700.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-700.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-700Italic.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-700Italic.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-900.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-900.woff2": "fonts/",
    "src/fonts/MUSEOSANSCYRL-900Italic.woff": "fonts/",
    "src/fonts/MUSEOSANSCYRL-900Italic.woff2": "fonts/",
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
