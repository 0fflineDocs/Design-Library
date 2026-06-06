import { loadDesigns } from './lib/loader'
import { createRouter } from './router'
import './styles/global.css'

async function main(): Promise<void> {
  const designs = await loadDesigns()
  const root = document.getElementById('app')
  if (!root) throw new Error('#app not found')
  createRouter(root, designs)
}

main().catch(console.error)
