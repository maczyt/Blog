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
    "revision": "2ec5fa221253d26c26c59ed22a838612"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "ecba3d7607051667f9fa46f4bc1f475f"
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
    "url": "assets/js/11.3f9c8092.js",
    "revision": "baa8de00a33fe29cf8405d228e04687d"
  },
  {
    "url": "assets/js/12.e8cf840b.js",
    "revision": "8da18be2a4955a8b565f0be23458405d"
  },
  {
    "url": "assets/js/13.4156c809.js",
    "revision": "94e01f5214907b0ff8d1de05f66c00e5"
  },
  {
    "url": "assets/js/14.b66aff51.js",
    "revision": "3da1b4c7bc06228ff24456158ad44f6d"
  },
  {
    "url": "assets/js/15.69d29ea5.js",
    "revision": "a39f694c7dbc3023fbdcbfa0d44b9747"
  },
  {
    "url": "assets/js/16.fd787637.js",
    "revision": "dfef8d247fa11b3db1736dbb2f76211c"
  },
  {
    "url": "assets/js/17.e482cdd4.js",
    "revision": "a75188616827c606e246f3d321097aea"
  },
  {
    "url": "assets/js/18.b57740de.js",
    "revision": "fd7c3268a9791d8283921bf0c3e9552e"
  },
  {
    "url": "assets/js/19.cd6f9c42.js",
    "revision": "017d37a108cb23ddd469ecb55a20a263"
  },
  {
    "url": "assets/js/2.61e2dbde.js",
    "revision": "4be320f96a30f2969fff5ed610d03659"
  },
  {
    "url": "assets/js/20.073f55ff.js",
    "revision": "b75e4bcc03c6039615b91d6bfb7f2986"
  },
  {
    "url": "assets/js/21.67a51469.js",
    "revision": "86ffadc2393325d5c700489a9752112f"
  },
  {
    "url": "assets/js/22.4ee61922.js",
    "revision": "0128859a24aefd9695dd67c839606a84"
  },
  {
    "url": "assets/js/23.32b29037.js",
    "revision": "bdfac7e64563bcc24f85d2858519de06"
  },
  {
    "url": "assets/js/24.598821b1.js",
    "revision": "600844f3b06bc3422199aa5e89822106"
  },
  {
    "url": "assets/js/25.ac4e2443.js",
    "revision": "3a074d1d6d5dc44b121539b4488cd14f"
  },
  {
    "url": "assets/js/26.451e6519.js",
    "revision": "329f12f7715ccdd3c167d714fad61338"
  },
  {
    "url": "assets/js/27.938ad08f.js",
    "revision": "19dd0a3f41bba07fae1d653574277ff9"
  },
  {
    "url": "assets/js/28.156af102.js",
    "revision": "471524f3f7f62912574947a1e134eff8"
  },
  {
    "url": "assets/js/29.854caef7.js",
    "revision": "9740c66b4ee48522e3fe1893129c1ea1"
  },
  {
    "url": "assets/js/3.0db2822e.js",
    "revision": "3730c86614b0c5c60f1de9435ef391ec"
  },
  {
    "url": "assets/js/30.0aa17c3e.js",
    "revision": "a562bcac399476d173ec3dd9becb791f"
  },
  {
    "url": "assets/js/31.3f32c25a.js",
    "revision": "661e917b8dad3cf933fca819866f8506"
  },
  {
    "url": "assets/js/32.9333946a.js",
    "revision": "0bd210919fe6aacbf3d51489bb4a7493"
  },
  {
    "url": "assets/js/33.493faef9.js",
    "revision": "b4aef47b6027308205a38a3e516b5e0c"
  },
  {
    "url": "assets/js/34.334b0e12.js",
    "revision": "31b8c09775b61fef68d8c683c3c4a56c"
  },
  {
    "url": "assets/js/35.2828695b.js",
    "revision": "5a556788f215e5cf54bea3961522226e"
  },
  {
    "url": "assets/js/36.57d7525b.js",
    "revision": "14369fd34f802ebf656adc504763e384"
  },
  {
    "url": "assets/js/37.f20db6fa.js",
    "revision": "94bf596ad13d500f84754626bc8ca28b"
  },
  {
    "url": "assets/js/38.c811a660.js",
    "revision": "b853586a90222f25292384b3fbbb19e1"
  },
  {
    "url": "assets/js/39.c9d1c7da.js",
    "revision": "b8306c26c63c19063b610b25da5b035d"
  },
  {
    "url": "assets/js/4.ea416e6b.js",
    "revision": "6d77e7127df9aa1be43f665de6aa2c28"
  },
  {
    "url": "assets/js/40.bfff263f.js",
    "revision": "e43d5f0dcbe0509a2b356794835c4dc0"
  },
  {
    "url": "assets/js/41.1ca5e5f3.js",
    "revision": "eff81ad7bd800834d42a392ac0ee993d"
  },
  {
    "url": "assets/js/42.1be774a8.js",
    "revision": "2075edb834e5961be7962ee98710397e"
  },
  {
    "url": "assets/js/43.3249b13a.js",
    "revision": "54246c60841e43896d23faad1fa8eaa3"
  },
  {
    "url": "assets/js/44.1f6dd50f.js",
    "revision": "7e2a976beb80ef86b5de4d86df32f097"
  },
  {
    "url": "assets/js/45.1192ff2d.js",
    "revision": "0225c783f11de842597c78f3e4ecbdc7"
  },
  {
    "url": "assets/js/46.086b56d6.js",
    "revision": "88e310f5764d5ac8feed32b90c6b433a"
  },
  {
    "url": "assets/js/47.209c2960.js",
    "revision": "f2556c95bd56e89adac910b6da81ee9f"
  },
  {
    "url": "assets/js/48.4d7e45ff.js",
    "revision": "ba91241af25d92050c8b2370d91e9a40"
  },
  {
    "url": "assets/js/49.787088e4.js",
    "revision": "d1d3393a9ca38071b2719f17d3962c16"
  },
  {
    "url": "assets/js/5.27d0c222.js",
    "revision": "93c4ac913c25700e5a8639de3509ef83"
  },
  {
    "url": "assets/js/50.253c3e40.js",
    "revision": "56dcbb4ca1368de961ce0d84124d7a7f"
  },
  {
    "url": "assets/js/51.f561decb.js",
    "revision": "13ab7b847a1b47de12fcf6316b0bf5aa"
  },
  {
    "url": "assets/js/52.45a10d24.js",
    "revision": "ce473bcb16b86408ab0952801bb21326"
  },
  {
    "url": "assets/js/53.43067f97.js",
    "revision": "5dc9455504a4d06d7c9cbf1c4a6880a0"
  },
  {
    "url": "assets/js/6.b2531abb.js",
    "revision": "cde09f23f3c061a8bc4a4cc0d261591b"
  },
  {
    "url": "assets/js/7.d0f43fc2.js",
    "revision": "ad9b84daaf4659766c2a6009a304adc2"
  },
  {
    "url": "assets/js/9.740f97a4.js",
    "revision": "b84e12bfcd48aed2defffd31de3cedf2"
  },
  {
    "url": "assets/js/app.a22dae35.js",
    "revision": "cd8a66884f0e97fd2c8b7ab26b4a6725"
  },
  {
    "url": "authors/index.html",
    "revision": "836bb6b9b19b9d6a58b6c3d66b2154d1"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "d7823cd69ad3117a76ee00a0cbde59a3"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "5ffa118d9ef8626f8fe381623a68149c"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "379deb8f642813c83830cd223c75a479"
  },
  {
    "url": "contact/index.html",
    "revision": "0f39d4694dde859dae1bf86cd27f19b8"
  },
  {
    "url": "es/autores/index.html",
    "revision": "caecd613d983813f9ccbcb12cf3837de"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "90ff7bef2a93b6caa572f4ec2b2c7c01"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "940676ead302f2b27518d2a8d3944e32"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "435129b8aa7d5b0353a9e1dd29b2b98b"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "58ba6d2d1c1b878e72dae2d763e705b9"
  },
  {
    "url": "es/index.html",
    "revision": "2fb0007ba883455ac944dd8b63a66fc8"
  },
  {
    "url": "es/posts/index.html",
    "revision": "5ebc7e101f2e1d6e94d11e9b178af617"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "ded57c620fe072fb67d4a98ba45275c5"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "340923adea0349dbec81d5450b8a75bb"
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
    "revision": "28f857f4b127b1706f903539f2ae443c"
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
    "revision": "859c540e7ac6ceb2afa36e1f49911a72"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "c00812b55f95926925e5dbaaadf83e45"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "ca8d33fc8fc856294d6e4bddbe65b433"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "f813eeacfdc32f3600b27ce901469f90"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "1400442a8c3a7ac9bfb767ba48fc8fa2"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "9fc01ff6e500a1b692b173609f6edae4"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "1b70da2d857c7b746cd3dc0de6afe15f"
  },
  {
    "url": "pt/index.html",
    "revision": "9dc21ca0b1787060d8c5a9df8bdbbbec"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "05e43a0169cd0305ce9452d7913fba4a"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "d3d9ecb1114fbf207ed387f1b521b24c"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "2466ccc09a8a992f7868f95b50d90719"
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
