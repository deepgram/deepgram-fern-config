import './main.css'

import ReactDOM from 'react-dom'

import React from 'react'

import { NavHeader } from './NavHeader'

const FERN_HEADER_CONTAINER_ID = 'fern-header'

const render = async () => {
  const deepgramHeaderId = document.getElementById("deepgram-header")

  if (!deepgramHeaderId) {
    // Create deepgram header wrapper
    const deepgramContentWrapper = document.createElement('div')
    deepgramContentWrapper.setAttribute('id', "deepgram-header")

    // Get or create fern-header container
    let fernHeaderContainer = document.getElementById(FERN_HEADER_CONTAINER_ID)
    if (!fernHeaderContainer) {
      fernHeaderContainer = document.createElement('div')
      fernHeaderContainer.setAttribute('id', FERN_HEADER_CONTAINER_ID)
      document.body.appendChild(fernHeaderContainer)
    }

    // Insert deepgram header at the beginning of fern-header
    fernHeaderContainer.insertBefore(deepgramContentWrapper, fernHeaderContainer.firstChild)

    ReactDOM.render(
      React.createElement(NavHeader),
      deepgramContentWrapper,
      () => {
        // Once the header component is loaded, make it visible
        if (fernHeaderContainer) fernHeaderContainer.style.display = 'block'
      }
    )
  }
}

let observations = 0
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')
  await render()
  new MutationObserver(async (e, o) => {
    await render()
    for (const item of e) {
      if (item.target instanceof HTMLElement) {
        const target = item.target
        if (target.id === 'fern-header') {
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