
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/usuarios",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/usuarios"
  },
  {
    "renderMode": 2,
    "route": "/campanias"
  },
  {
    "renderMode": 2,
    "route": "/jornadas"
  },
  {
    "renderMode": 2,
    "route": "/barrios"
  },
  {
    "renderMode": 2,
    "route": "/zonas"
  },
  {
    "renderMode": 2,
    "route": "/encuestadores"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4973, hash: '4755c6d775a9405e550cc75ecc8e5821ea511abd5310936bc030e1bda346bd90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'e7defd639b7c1638b94055147884215c6db7d15e88fd3a7060da94f84a5e2dad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'campanias/index.html': {size: 19087, hash: '1d9c996aa69e05b3008c8817c3f3b2d416fa0147ff367c1a59a47a36614cea23', text: () => import('./assets-chunks/campanias_index_html.mjs').then(m => m.default)},
    'zonas/index.html': {size: 19072, hash: 'b8c476c4865ea7c0b8003d8be3cedabf5ae9c5c32a8a77421cc5033ac611eb3f', text: () => import('./assets-chunks/zonas_index_html.mjs').then(m => m.default)},
    'usuarios/index.html': {size: 20616, hash: '3f21a47346b85061b07f3896a2b3a45d39f314bba10f5bea331322ad4c6a9915', text: () => import('./assets-chunks/usuarios_index_html.mjs').then(m => m.default)},
    'barrios/index.html': {size: 19065, hash: 'b7caba8139427000ed6b1e868fce7eaa4ba38bd20ee706a610d91f551b08d8b6', text: () => import('./assets-chunks/barrios_index_html.mjs').then(m => m.default)},
    'jornadas/index.html': {size: 19043, hash: '1380d52f35a7b9d37b1a0a37d21ff9970a88ef33b730e78758551af8af13c5e3', text: () => import('./assets-chunks/jornadas_index_html.mjs').then(m => m.default)},
    'encuestadores/index.html': {size: 19106, hash: 'dbfd88a0b38114548db016e4322e21f192c6e7d1ab0b6d3a8777ed08dd0c824c', text: () => import('./assets-chunks/encuestadores_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
