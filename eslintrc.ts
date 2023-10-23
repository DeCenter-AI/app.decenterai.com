module.exports = {
    extends: ['next'],
    parserOptions: {
      project: './tsconfig.json', 
    },
    rules: {
        "indent": ["error", 2],
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "comma-dangle": ["error", "always-multiline"]
      }
      
  };
  