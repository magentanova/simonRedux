import {combineReducers,createStore} from 'redux'
import {aiSequence, level, litColor, loss, playerSequence, sequenceIndex, turn, onMobileDevice} from './reducers.js'

const initialState = {
	onMobileDevice: null,
	turn: null,
	aiColors: [],
	playerColors: [],
	playerIndex: null,
	level: 1
}


const store = createStore(combineReducers({aiSequence, level, litColor, loss, playerSequence, turn, onMobileDevice}))

export default store