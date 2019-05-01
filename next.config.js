const nextConfig = {
  // Read the `BUILD_TARGET` variable and use the passed mode
  target: process.env.BUILD_TARGET || 'server',
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    };
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped'),
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
