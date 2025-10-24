// ESLint 扁平配置文件 (ESLint 9.x 推荐格式)
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import tseslintParser from "@typescript-eslint/parser";

// 导出 ESLint 配置
export default [
  // 全局忽略规则：指定需要忽略的文件或目录
  { ignores: ['dist', 'node_modules', 'build', 'jtuniversity-consumer'] },

  // 基础配置：适用于所有文件
  {
    languageOptions: {
      // 环境变量：同时支持浏览器和 Node.js 环境
      globals: {
        ...globals.browser,
        ...globals.node
      },

      // 解析器：使用 TypeScript 解析器
      parser: tseslintParser,
    }
  },

  // JavaScript 推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // 适配 prettier
  prettierConfig,

  // TypeScript 和 React 文件的特定配置
  {
    // 应用范围：仅对 TypeScript 和 TypeScript React 文件生效
    files: ['**/*.{ts,tsx}'],

    // 语言选项配置
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      globals: globals.browser
    },

    // 启用的插件 - 使用对象格式
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettierPlugin,
      'react': reactPlugin
    },

    // 自定义规则配置
    rules: {
      // React Hooks 规则
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',

      // React 热更新规则
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],

      // TypeScript 规则
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Prettier 规则
      'prettier/prettier': 'error',

      // 其他规则
      'prefer-const': 'off'
    }
  },

  // JavaScript 文件的特定配置
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  }
];
