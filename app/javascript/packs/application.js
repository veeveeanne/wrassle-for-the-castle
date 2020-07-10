import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
    let reactElement = document.getElementById('app')
    if (reactElement) {
      render(<App />, reactElement)
    }
})