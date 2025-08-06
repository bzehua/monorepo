module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    // 基础规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'error',

    // 代码质量
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-unreachable': 'error',
    curly: ['error', 'all'],
  },
  overrides: [
    // TypeScript 文件
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        // 禁用基础规则，使用TypeScript版本
        'no-unused-vars': 'off',
        'no-undef': 'off',

        // TypeScript特定规则
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // '@typescript-eslint/prefer-const': 'error', // 使用基础的prefer-const规则
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
    // Vue 文件
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      plugins: ['vue'],
      extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    // Node.js 应用特定配置
    {
      files: ['apps/app/**/*.ts', 'apps/app/**/*.js'],
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'no-console': 'off', // Node.js应用允许console
      },
    },
    // 测试文件
    {
      files: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    // 配置文件
    {
      files: ['*.config.js', '*.config.ts', 'vite.config.*', 'vitest.config.*'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    'coverage/',
    '*.min.js',
    '.eslintrc.js',
    'public/',
  ],
};
