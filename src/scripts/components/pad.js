import React from 'react'

import store from '../state'
import {LIGHT_DURATION} from '../constants.js'

const lightColor = e => {
	store.dispatch({
		type: 'LIGHT_PAD',
		litColor: e.target.value
	})

	store.dispatch({
		type: 'ADD_PLAYER_COLOR',
		color: e.target.value
	})

}

const unlightColor = e=> {
	store.dispatch({
		type: 'LIGHT_PAD',
		litColor: null
	})
}

class Pad extends React.Component {
	constructor(props) {
		super(props)
		this.lightColor = this.lightColor.bind(this) 
	}

	lightColor() {
		store.dispatch({
			type: 'LIGHT_PAD',
			litColor: this.props.color
		})

		store.dispatch({
			type: 'ADD_PLAYER_COLOR',
			color: this.props.color
		})

		var index = this.props.playerSequence.length

		console.log(this.props.playerSequence, this.props.aiSequence)
		// if you lose
		if (this.props.color !== this.props.aiSequence[index]) {
			store.dispatch({
				type: 'LOSE'
			})
		}

		// if you beat the level
		else {
			if (index + 1 === this.props.aiSequence.length) {
				store.dispatch({
					type: 'BEAT_LEVEL'
				})
			}
		}
	}

	render() {
		return (
			<button
				disabled={this.props.turn !== 'player'}
				onMouseDown={this.lightColor}
				onMouseUp={unlightColor}
				value={this.props.color} 
				className={`pad ${this.props.color} ${this.props.litColor === this.props.color ? 'lit' : ''}`} >
			</button>

			)
	}
}
// const Pad = props => 



export default Pad