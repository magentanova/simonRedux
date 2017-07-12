import React from 'react'

import {COLOR_NAMES} from '../constants.js'
import Pad from './pad.js'
import ControlPanel from './controlPanel.js'

const Board = (props) => 
	<div className="board">
		{COLOR_NAMES.map(color => <Pad key={color} color={color} {...props} />)}
		<ControlPanel {...props} />
	</div>


export default Board