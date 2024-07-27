import { defineConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import babelEslintParser from '@babel/eslint-parser';
import eslintConfigNext from 'eslint-config-next';

const baseConfig = {
  languageOptions: {
    parser: babelEslintParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        plugins: ['@babel/plugin-syntax-jsx'],
      },
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: {
    react: eslintPluginReact,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add any base rules here
  },
};

const nextConfig = {
  extends: ['next/core-web-vitals'], // Extending ESLint config for Next.js
  // Additional rules or settings can be added here
};

export default defineConfig([
  baseConfig,
  nextConfig,
  // Add any additional rules or overrides here
]);
