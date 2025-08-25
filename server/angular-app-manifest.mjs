
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/chucEmLinhNn/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/chucEmLinhNn"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: '2e09a64e7753dc6dad80a6735c5ce8bc3d1b38bafdff8b28f36fa77ff3a19a92', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '6e13e93426d2e4fb4f686399e0fc0d70cfab5bcaff25a0f3f4a8c39d3c34f8a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3905, hash: '875c33f3a36172cba11d01a084157a6f46610e66f5d35c881733c9156363e2af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
