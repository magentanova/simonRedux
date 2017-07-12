import React from 'react'

import {generateSequence, getColor} from '../utils.js'
import {LIGHT_DURATION} from '../constants.js'
import store from '../state'

const beginAiTurn = (props) => {
	store.dispatch({
		type: 'CHANGE_TURN',
		whose: 'ai'
	})

	const incr = (index) => {
		var newColor
		// if it's time to add a new element to the sequence
		if (index === props.aiSequence.length) {
			newColor = getColor()
			store.dispatch({
				type: "ADD_AI_COLOR",
				color: newColor
			})

			// light it up, changing turn as it lights off
			store.dispatch({
				type: "LIGHT_PAD",
				litColor: newColor
			})
			setTimeout(()=>{
				store.dispatch({
					type: "LIGHT_PAD",
					litColor: null
				})
				store.dispatch({
					type: "CHANGE_TURN",
					whose: "player"
				})
			}, LIGHT_DURATION - 250)
		}

		// if we're still working with the old sequence
		else {
			newColor = props.aiSequence[index]
			store.dispatch({
				type: "LIGHT_PAD",
				litColor: newColor
			})
			setTimeout(()=>{
				// light it up and move on to the next
				store.dispatch({
					type: "LIGHT_PAD",
					litColor: null
				})
			}, LIGHT_DURATION - 250)
			setTimeout(()=>incr(index + 1),LIGHT_DURATION)
		}
	}
	incr(0)
}

const ControlPanel = (props) => 
	<div className="control-panel">
		<h4 className="turn">
			{props.turn.toUpperCase()}
		</h4>
		<button onClick={()=>beginAiTurn(props)} disabled={!!props.turn} >GO</button>
	</div>


export default ControlPanel