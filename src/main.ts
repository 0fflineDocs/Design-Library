import { loadDesigns } from './lib/loader'
import { createRouter } from './router'
import './styles/global.css'

async function main(): Promise<void> {
  const designs = await loadDesigns()
  const root = document.getElementById('app')
  if (!root) throw new Error('#app not found')
  createRouter(root, designs)
}

main().catch(err => {
  console.error('[design-library] Fatal error:', err)
  const root = document.getElementById('app')
  if (root) {
    const pre = document.createElement('pre')
    pre.style.cssText = 'padding:40px;color:#c04040;font-family:monospace;font-size:12px'
    pre.textContent = String(err)
    root.appendChild(pre)
  }
})
