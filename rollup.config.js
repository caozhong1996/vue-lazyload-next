import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: ['vue'],
    output: {
      name: 'vueLazyloadNext',
      globals: {
        vue: 'Vue'
      },
      file: 'vue-lazyload-next.js',
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({ runtimeHelpers: true }),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    external: ['vue'],
    output: {
      file: 'vue-lazyload-next.esm.js',
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({ runtimeHelpers: true }),
      terser()
    ]
  }
]
