module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-reaolver',
      {
        root: ['./src'],
        alias: {
          '^@app/(.+)': './src/\\1', 
        },
      },
    ],
  ],
};

