/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6eb8c5535126f175ee251fa9b57e996d"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "4e398008d0c878b7e4572933767ca706"
  },
  {
    "url": "assets/css/0.styles.dd7a3c49.css",
    "revision": "fb7cfd20a98bc5365ceed2ef89e285d6"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.26c0f09c.js",
    "revision": "539096279149ed6d8d215e9732e397ca"
  },
  {
    "url": "assets/js/10.32fbf590.js",
    "revision": "28b9f707294b30f5196bdd4471535f13"
  },
  {
    "url": "assets/js/11.46cd7c33.js",
    "revision": "34a35732bbd3614f593749b6d168be24"
  },
  {
    "url": "assets/js/12.9b3f48dd.js",
    "revision": "db9ebeee5517c7d38155796fb288e579"
  },
  {
    "url": "assets/js/13.596da9c4.js",
    "revision": "6be41ebf7a44a675397340ae358f9f72"
  },
  {
    "url": "assets/js/14.b66aff51.js",
    "revision": "3da1b4c7bc06228ff24456158ad44f6d"
  },
  {
    "url": "assets/js/15.8ed76f79.js",
    "revision": "e5ec23810fbbdb18502c4176e1085e60"
  },
  {
    "url": "assets/js/16.5f24828e.js",
    "revision": "a17fed18ee108563ca2892b1aa6439ee"
  },
  {
    "url": "assets/js/17.2d746d3c.js",
    "revision": "6d7eaae015150469230b8e951ce2de76"
  },
  {
    "url": "assets/js/18.7a3354de.js",
    "revision": "b6d2efb420000e6488a9defbd5e41ab5"
  },
  {
    "url": "assets/js/19.9761988b.js",
    "revision": "872b8ecaeef1f6793b0468e29d4f8465"
  },
  {
    "url": "assets/js/2.61e2dbde.js",
    "revision": "4be320f96a30f2969fff5ed610d03659"
  },
  {
    "url": "assets/js/20.a6a73cf4.js",
    "revision": "993ffeedbb5bc8e666633c3adc42795c"
  },
  {
    "url": "assets/js/21.275fa9be.js",
    "revision": "6adabea290c7fca9e7b8617311b967a8"
  },
  {
    "url": "assets/js/22.b48b6f44.js",
    "revision": "f99d345629fa268df3bb6806c437dbda"
  },
  {
    "url": "assets/js/23.f098eea1.js",
    "revision": "4a8e6ea86dcf0b817ea7312f7147e8de"
  },
  {
    "url": "assets/js/24.d4e82c85.js",
    "revision": "694c8929dfda07326c99effa839730aa"
  },
  {
    "url": "assets/js/25.d89f68a3.js",
    "revision": "79332ea6e76963b7afda4cd469f6a7d2"
  },
  {
    "url": "assets/js/26.45c62311.js",
    "revision": "54602bb5f422692bf91ce462a2868599"
  },
  {
    "url": "assets/js/27.33644e4f.js",
    "revision": "bb91552a2a3d1447eed9c3aec86e45a6"
  },
  {
    "url": "assets/js/28.3c4cf4df.js",
    "revision": "56f147dcec82d2321931358d6d11b11e"
  },
  {
    "url": "assets/js/29.b7726d9c.js",
    "revision": "e1e4077bf6d381a1c8f0fa3d28efbcf0"
  },
  {
    "url": "assets/js/3.08714e24.js",
    "revision": "9136205e6d9f9942df9996ecba311611"
  },
  {
    "url": "assets/js/30.0019a031.js",
    "revision": "96946c712d32ce201b581e4014ab0893"
  },
  {
    "url": "assets/js/31.013b832b.js",
    "revision": "4b71458da7a971612bba70cb44cdaa54"
  },
  {
    "url": "assets/js/32.75938db7.js",
    "revision": "a544fb0d9a29c98cb1c1cbacb6501d91"
  },
  {
    "url": "assets/js/33.1bf3648c.js",
    "revision": "d57428c2c128eeaa3361c6c0eb0d5a4c"
  },
  {
    "url": "assets/js/34.01376fdd.js",
    "revision": "f9b08513ab11ebbe09468dba12fc222d"
  },
  {
    "url": "assets/js/35.06380600.js",
    "revision": "c7b97b2486e3915d00706d19289a2c71"
  },
  {
    "url": "assets/js/36.76729a35.js",
    "revision": "b834aaeffd1225c1777a62c68c60ebc6"
  },
  {
    "url": "assets/js/37.032f34c3.js",
    "revision": "15ab7f7047ad4c7cafd657d60f9fbee0"
  },
  {
    "url": "assets/js/38.3441e5f4.js",
    "revision": "ab73f84e54847845a5196ebf3f7f6cce"
  },
  {
    "url": "assets/js/39.590f9283.js",
    "revision": "b741ea9ab186a79442ee2e515fd76c09"
  },
  {
    "url": "assets/js/4.4ce1617c.js",
    "revision": "fbd8c2ecb1af64be9fd83ba7b843918e"
  },
  {
    "url": "assets/js/40.66a110a0.js",
    "revision": "2594770ed005f4f3411ffdf17b9a1161"
  },
  {
    "url": "assets/js/41.a7c3a425.js",
    "revision": "d286b8b64dea6657a33a489ae28d30b0"
  },
  {
    "url": "assets/js/42.4acd9a97.js",
    "revision": "047005c8a44813691e58b023f1363d02"
  },
  {
    "url": "assets/js/43.bc30bcc5.js",
    "revision": "a1c42d56b6a4ba5d24ac4ebcd09d4705"
  },
  {
    "url": "assets/js/44.59438077.js",
    "revision": "f4eed2cb3b6971fbf35d1ec151b85444"
  },
  {
    "url": "assets/js/45.c43b247d.js",
    "revision": "c4e5f48ff2c1eb4519455f2cdd9abf82"
  },
  {
    "url": "assets/js/46.94f01cfb.js",
    "revision": "27c24e3a294efe3ab391a142cbd33c37"
  },
  {
    "url": "assets/js/47.1756e5b0.js",
    "revision": "b6a1046099d1087089ffe0b43003e0de"
  },
  {
    "url": "assets/js/48.04d363a4.js",
    "revision": "b3746c42667a7c60df158b3c4fcbda07"
  },
  {
    "url": "assets/js/49.35f0087f.js",
    "revision": "93429c7c86606295db6dde608c8db23b"
  },
  {
    "url": "assets/js/5.e4602f44.js",
    "revision": "87abb5d5a1f4b6093dd2ca04ca0ddd34"
  },
  {
    "url": "assets/js/50.77d93848.js",
    "revision": "3b5fe3f548a84c8104544f88c3fccfe6"
  },
  {
    "url": "assets/js/51.885ef2ab.js",
    "revision": "7b4c28b2969e5631e7e813596dc3f44c"
  },
  {
    "url": "assets/js/52.0b254253.js",
    "revision": "10ed7cae177b3b15a3ca5e347bdbc6ad"
  },
  {
    "url": "assets/js/53.a901309b.js",
    "revision": "f4737651547a0b05d2e3361bc98eab5f"
  },
  {
    "url": "assets/js/54.f35632c7.js",
    "revision": "3484554ea47ce99ba13a18c43b09e771"
  },
  {
    "url": "assets/js/6.f92ffb9b.js",
    "revision": "bda05f1d80f7d5224e42ec89f31dda96"
  },
  {
    "url": "assets/js/7.695cd72f.js",
    "revision": "56fbc9ec595dcb4b9f8eaf411a12723b"
  },
  {
    "url": "assets/js/9.2a3e87e1.js",
    "revision": "a8e0040b3c36104838e3e03eff1303bd"
  },
  {
    "url": "assets/js/app.fed64d61.js",
    "revision": "98b30d4f62ca61c99fe50e71fdf3742a"
  },
  {
    "url": "authors/index.html",
    "revision": "ed2f59fb295c430b92d1cf8787da74f3"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "155936be726f285a8197f9ccc610c08e"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "5c26582176b7d61a343dfc7ff14edbe9"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "594ce97dd3c2de4d963cca2518138643"
  },
  {
    "url": "contact/index.html",
    "revision": "155ac4e4f75913a8d4d55328ca28ee2c"
  },
  {
    "url": "es/autores/index.html",
    "revision": "10fd0d1650a46201bb2e3d81c5f8bb9d"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "dd12f1180435acb27835a3279bec380b"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "3a72520ae64d0759e443427f34d768a3"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "9a82678310cbf46fff4167b7a56b1684"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "3e8a030ac9ebbefd9ab2c3aaaf89c2ea"
  },
  {
    "url": "es/index.html",
    "revision": "9d6c2280e85df81062298ffc4230043c"
  },
  {
    "url": "es/posts/index.html",
    "revision": "055ef078a432bb9778fc765da2718b0c"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "eb25dae90b71821c2d45cd6076730073"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "3e66cec45a167f52217807acb4855b20"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "9e909ba4444ac9ecb89ae52ac0da7275"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/index.html",
    "revision": "9e453a3a1513151d44abfb9e3ae3e83e"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "dc6b5471bbd708ca9a466a9ddaa63e67"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "12862fddd6feb90b328291f32197adf5"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "55dd1d5e15ea53ad802b4f2cbe90d8c9"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "6cbd6e7306b39b8f1a047012d63d26bf"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "85ee77852ded1dfeb312ac09bed23fc3"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "7b81894e98a25f5743b95aa7ad6cd137"
  },
  {
    "url": "pt/index.html",
    "revision": "d750687728222cca5bfadb475e9d8b7a"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "7dc49acf18c028439ccef23789183afb"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "6a9804d1feda84c8e78c62dd3ec99d83"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "88c0d5eb0a36553312e8a3df08392c3b"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
