const proxy = require('http2-proxy');

process.env.SNOWPACK_PUBLIC_STANDALONE = false;

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-webpack',
    ['tsconfig-paths-snowpack-plugin', { logAlias: true }],
  ],
  packageOptions: {
    external: ['path'],
  },
  devOptions: {
    port: 8082,
  },
  buildOptions: {},
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 8080,
        });
      },
    },
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  alias: {
    src: './src',
  },
};
