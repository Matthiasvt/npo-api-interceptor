import config from './rollup.config'

export default config({
  format: 'cjs',
  dest: 'lib/npoapiinterceptor.browser.cjs.js',
  browser: true
})
