/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

// 3から

const { resolve } = require('path');

const nextConfig = {
  webpack: (config) => {
    // srcディレクトリをエイリアスのルートに設定
    config.resolve.alias['~'] = resolve(__dirname, 'src')
  }
};

module.exports = nextConfig;
