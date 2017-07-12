
// {
// 	type: "CHANGE_TURN",
//	whose: "player" || "ai"
// }

import {getColor} from '../utils.js'

export const aiSequence = (state = [getColor(),getColor()], action) => {
	switch (action.type) {
		case "ADD_AI_COLOR": 
			return state.concat(action.color)
		case "LOSE":
			return [getColor(),getColor()]
		default: 
			return state
	}
}

export const level = (state = 3, action) => {
	switch (action.type) {
		case "BEAT_LEVEL": 
			return state + 1
		case "LOSE": 
			return 3
		default: 
			return state
	}
}

export const litColor = (state = null, action) => {
	switch (action.type) {
		case "LIGHT_PAD": 
			return action.litColor
		case "LOSE":
			return null
		default: 
			return state
	}
}

export const loss = (state = false, action) => {
	switch (action.type) {
		case "LOSE": 
			return true
		case "RESTART": 
			return false
		default: 
			return state
	}
}

export const playerSequence = (state = [], action) => {
	switch (action.type) {
		case "ADD_PLAYER_COLOR": 
			return state.concat(action.color)
		case "LOSE":
			return []
		case "BEAT_LEVEL":
			return []
		default: 
			return state
	}
}

export const sequenceIndex = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT_INDEX": 
			return state + 1
		case "BEAT_LEVEL":
			return 
		default: 
			return state
	}
}

export const turn = (state = '', action) => {
	switch (action.type) {
		case "CHANGE_TURN":
			return action.whose
		case "BEAT_LEVEL":
			return ''
		case "LOSE": 
			return ''
		default: 
			return state
	}
}
