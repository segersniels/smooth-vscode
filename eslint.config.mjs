import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier/recommended';
import js from '@eslint/js';
import json from '@eslint/json';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    plugins: { json },
    rules: {
      'json/no-duplicate-keys': 'error',
      'prettier/prettier': 'error',
    },
  },
  prettier,
]);
