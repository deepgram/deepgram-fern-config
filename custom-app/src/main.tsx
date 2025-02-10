import './main.css'

import { NavHeader } from './NavHeader'
import { onDOMContentMutate, renderInContainer } from './utils'

function render() {
  renderInContainer(NavHeader, document.getElementById('fern-header'))
}

onDOMContentMutate(render)
