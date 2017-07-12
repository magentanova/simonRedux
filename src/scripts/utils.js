import {COLOR_NAMES} from './constants.js'

export const randEl = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const getColor = () => COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)]

export const generateSequence = (n) => {
	var seq = []
	for (var i = 0; i < n; i ++) { 
		seq.push(randEl(COLOR_NAMES))
	}
	return seq
}

window.generateSequence = generateSequence