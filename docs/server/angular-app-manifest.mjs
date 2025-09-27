
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22475, hash: '8a897251c9305ef670dfd3baf7f248550c53076088ba2a5f512bc16f518b10f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '188a7ccc1598f7bae869a09f91051aa2037c478aef8bb96098fe674400448e82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 166260, hash: '710cff9286c68269d2f164df0bca2e1c587aa7f404464a50199a5816630d6286', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JGIMKMBY.css': {size: 76281, hash: 'RUsJxXyoDlE', text: () => import('./assets-chunks/styles-JGIMKMBY_css.mjs').then(m => m.default)}
  },
};
