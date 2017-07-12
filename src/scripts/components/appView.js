import React from 'react'

import store from '../state'
import {getColor} from '../utils.js'
import {LIGHT_DURATION} from '../constants.js'
import Board from './board.js'
import GameOver from './gameOver.js'
import Readout from './readout.js'

const restart = () => {
	store.dispatch({
		type: 'RESTART'
	})
}

class AppView extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		store.subscribe(()=> {
			this.setState(store.getState())
		})
	}

	render() {
		return (
			<div className="app-view">
				<GameOver loss={this.state.loss} restart={restart} />
				<div className={`game ${this.state.loss ? 'hidden' : ''}`}>
					<Readout {...this.state} />
					<Board {...this.state} />
				</div>
			</div>
			)
	}
}

export default AppView