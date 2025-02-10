import { createRoot, type Root } from 'react-dom/client'
import React, { FunctionComponent } from 'react'

// avoid creating multiple roots for the same element
const roots = new WeakMap<HTMLElement, Root>()
function getOrCreateRoot(element: HTMLElement): Root {
  let root = roots.get(element)
  if (root == null) {
    root = createRoot(element, {
      identifierPrefix: 'custom-app',
      onRecoverableError: console.error,
    })
    roots.set(element, root)
  }
  return root
}

export function renderInContainer(Component: FunctionComponent, container: HTMLElement | null | undefined) {
  if (container != null) {
    const mountPoint = document.createElement('div')
    container.insertBefore(mountPoint, container.firstChild)
    const root = getOrCreateRoot(mountPoint)
    root.render(React.createElement(Component))
  }
}

export function onDOMContentMutate(render: () => void) {
    // observe DOM changes to re-render the custom header and footer
    let observations = 0
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded')
        render()
        new MutationObserver((e, o) => {
            render()
            for (const item of e) {
            if (item.target instanceof HTMLElement) {
                const target = item.target
                if (target.id === 'fern-header' || target.id === 'fern-footer') {
                if (observations < 3) {
                    // react hydration will trigger a mutation event
                    observations++
                } else {
                    o.disconnect()
                }
                break
                }
            }
            }
        }).observe(document.body, { childList: true, subtree: true })
    })
}