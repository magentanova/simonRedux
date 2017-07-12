import React from 'react'


const GameOver = props => 
	<div className={`loss-overlay ${props.loss ? '' : 'hidden'}`}>
		<h2>GAME OVER</h2>
		<button onClick={props.restart}>start again</button>
	</div>
	
export default GameOver