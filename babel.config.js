module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@flows': './src/flows',
          '@shared': './src/shared',
          '@ui': './src/shared/ui',
        },
      },
    ],
  ],
}
