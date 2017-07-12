import {combineReducers,createStore} from 'redux'
import {aiSequence, level, litColor, loss, playerSequence, sequenceIndex, turn} from './reducers.js'

const initialState = {
	turn: null,
	aiColors: [],
	playerColors: [],
	playerIndex: null,
	level: 1
}


const store = createStore(combineReducers({aiSequence, level, litColor, loss, playerSequence, turn}))

export default store