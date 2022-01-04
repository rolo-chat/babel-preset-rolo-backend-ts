module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: { node: 16 },
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: "src",
        alias: {
          test: "test",
        },
        extensions: [".js", ".ts"],
      },
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-runtime",
  ],
  env: {
    test: {
      plugins: ["istanbul"],
    },
  },
};
