import 'uno.css'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const component = await import('../my-div.js');
     

      app.use(component)
    }}
}