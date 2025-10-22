import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [preact()],
// })

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // if (command === 'serve') {
  //   return {
  //     // dev 独有配置
  //   }
  // } else {
  //   // command === 'build'
  //   return {
  //     // build 独有配置
  //   }
  // }
  console.error('command', command)
  console.error('mode', mode)
  console.error('isSsrBuild', isSsrBuild)
  console.error('isPreview', isPreview)
  return {
    root: './',
    base: './',
    plugins: [preact()],
  }
})
