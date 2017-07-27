import React from "react"

import store from "../state"
import { getColor } from "../utils.js"
import { LIGHT_DURATION } from "../constants.js"
import Board from "./board.js"
import GameOver from "./gameOver.js"
import Readout from "./readout.js"

const restart = () => {
	store.dispatch({
		type: "RESTART"
	})
}

class AppView extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		store.subscribe(() => {
			this.setState(store.getState())
		})
	}

	componentWillMount() {
		//detects users device and applies the result of check to state
		if (navigator.userAgent.toLowerCase().includes("mobi")) {
			store.dispatch({
				type: "ON_MOBILE_DEVICE"
			})
		} else {
			store.dispatch({
				type: "ON_LARGER_DEVICE"
			})
		}
	}

	render() {
		return (
			<div className="app-view">
				<GameOver loss={this.state.loss} restart={restart} />
				<div className={`game ${this.state.loss ? "hidden" : ""}`}>
					<Readout {...this.state} />
					<Board {...this.state} />
				</div>
				<div className="footer">
					<a
						target="_blank"
						href="https://github.com/magentanova/simonRedux"
					>
						source
					</a>
				</div>
			</div>
		)
	}
}

export default AppView
