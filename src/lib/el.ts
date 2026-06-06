type ElAttrs<K extends keyof HTMLElementTagNameMap> = {
  [P in keyof Omit<HTMLElementTagNameMap[K], 'style'>]?: HTMLElementTagNameMap[K][P]
} & { style?: Partial<CSSStyleDeclaration> }

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: ElAttrs<K> = {},
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag)
  const { style: styleObj, ...rest } = attrs
  Object.assign(node, rest)
  if (styleObj) Object.assign(node.style, styleObj)
  for (const child of children) {
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child)
  }
  return node
}
