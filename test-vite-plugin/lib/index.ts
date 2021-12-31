export default function vitePluginTest(): any {
  return {
    name: 'vitePluginTest',
    transform (code, id) {
      if (!/vue&type=i18n/.test(id)) {
        return ''
      }
      return `export default Comp => {
        Comp.i18n = ${code}
      }`
    }
  }
}
