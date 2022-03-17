process.env.SNOWPACK_PUBLIC_STANDALONE = true;

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
  routes: [],
  alias: {
    src: './src',
  },
};
