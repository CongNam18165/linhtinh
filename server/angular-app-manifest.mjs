
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/linhtinh/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/linhtinh"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: 'd7669ea97b8dcd7c00cd62d61726f9dedf0c95c466aa9c5fe209d5635a9f733a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'b1ad4dc9154b16e0cfc734b16bd07907e36df11806d4f4a0bd144dd3c74d9eaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3901, hash: 'b39d15e574a1224ffad464ee2cb3b6c0d2c3c15b3c5358f610b27b116c0f78f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
