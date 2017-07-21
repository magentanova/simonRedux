import React from "react"

import store from "../state"
import { LIGHT_DURATION } from "../constants.js"

const lightColor = e => {
	store.dispatch({
		type: "LIGHT_PAD",
		litColor: e.target.value
	})

	store.dispatch({
		type: "ADD_PLAYER_COLOR",
		color: e.target.value
	})
}

const unlightColor = e => {
	store.dispatch({
		type: "LIGHT_PAD",
		litColor: null
	})
}

class Pad extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMobile: navigator.userAgent.toLowerCase().includes("mobi")
				? true
				: false
		}
		this.lightColor = this.lightColor.bind(this)
	}

	lightColor() {
		store.dispatch({
			type: "LIGHT_PAD",
			litColor: this.props.color
		})

		store.dispatch({
			type: "ADD_PLAYER_COLOR",
			color: this.props.color
		})

		var index = this.props.playerSequence.length

		// if you lose
		if (this.props.color !== this.props.aiSequence[index]) {
			store.dispatch({
				type: "LOSE"
			})
		} else {
			// if you beat the level
			if (index + 1 === this.props.aiSequence.length) {
				store.dispatch({
					type: "BEAT_LEVEL"
				})
			}
		}
	}

	render() {
		var mobileDevice = this.state.isMobile
		return (
			<button
				disabled={this.props.turn !== "player"}
				onMouseDown={mobileDevice ? null : this.lightColor}
				onTouchStart={mobileDevice ? this.lightColor : null}
				onMouseUp={mobileDevice ? null : unlightColor}
				onTouchEnd={mobileDevice ? unlightColor : null}
				value={this.props.color}
				className={`pad ${this.props.color} ${this.props.litColor === this.props.color ? "lit" : ""}`}
			/>
		)
	}
}
// const Pad = props =>

export default Pad
