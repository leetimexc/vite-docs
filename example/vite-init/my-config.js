import { defineConfig } from 'vite'

// /** @type {import('vite').UserConfig} */
console.log('自定义的配置文件')

// export default {
//     base: '/three-docs/',
// }
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    console.error(command, mode, isSsrBuild, isPreview)
    if (command === 'serve') {
        return {
            // dev 独有配置
        }
    } else {
        // command === 'build'
        return {
            // build 独有配置
        }
    }
})