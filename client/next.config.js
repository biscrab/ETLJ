const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withAntdLessConfig = {
  // optional
  modifyVars: { '@primary-color': '#348fe2' },
  // optional
  lessVarsFilePath: './pages/antd-custom.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  future: {
    // if you use webpack5
    webpack5: true,
  },
};
const plugins = [
  // [withBundleAnalyzer],
  [withAntdLess, withAntdLessConfig],
];
const nextConfig = {
  webpack: (config, { webpack }) => {
    const prod = process.env.NODE_ENV === 'production';
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
    };
    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }
    return newConfig;
  },
  async rewrites() {
    return [
      {
        source: '/api/:kanji*',
        destination: `https://ko.wiktionary.org/wiki/:kanji*`,
      },
      {
        source: '/word',
        destination: `https://ja.dict.naver.com/#/jlpt/list`
      }
    ];
  },
};

module.exports = withPlugins(plugins, nextConfig);