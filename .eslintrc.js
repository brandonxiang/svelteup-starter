module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true
    },
    plugins: [
      'svelte3'
    ],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ],
    settings: {
        'svelte3/compiler-options': {
            customElement: true,
        },
    }
  };