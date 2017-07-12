import React from 'react'
import ReactDOM from 'react-dom'

import AppView from './components/appView.js'


Array.prototype.last = function() {
	return this[this.length - 1]
}

const app = function() {
  ReactDOM.render(<AppView />, document.querySelector('.container'))
}

app()