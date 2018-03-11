import React, { Component } from "react";

// Actions
import QuestionActions from "../actions/QuestionActions";

class Input extends Component {
	constructor(props) {
		super(props);
		this._onFocus = this._onFocus.bind(this);
		this._onBlur = this._onBlur.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);

		this.state = { value: this.props.value || "", focus: false };
	}

	_onFocus() {
		this.setState({ focus: true });
	}

	_onBlur() {
		this.setState({ focus: false });
	}

	_onKeyDown(event) {
		if (event.keyCode === 13) {
			this.props.returnFunction(this.props.id, this.props.index);
		} else if (
			(event.keyCode == 8 || event.keyCode == 46) &&
			this.state.value === "" &&
			this.props.backFunction !== undefined
		) {
			this.props.backFunction(this.props.id, this.props.index);
		}
	}

	_onChange(event) {
		this.setState({ value: event.currentTarget.value });
		QuestionActions.setText(this.props.id, event.currentTarget.value);
	}

	render() {
		const style = {
			width: this.props.width || "calc(100% - 32px)",
			backgroundColor: "none",
			border: "none",
			padding: "8px 16px",
			fontSize: "16px",
			lineHeight: "16px",
			fontFamily: "inherit",
			outline: "0",
			backgroundSize: this.state.focus ? "100% 2px,100% 2px" : "0 2px,100% 2px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center bottom,center calc(100%)",
			transition: "background 0.3s ease-out",
			backgroundImage: "linear-gradient(rgb(70, 180, 175),rgb(70, 180, 175)),linear-gradient(#D2D2D2,#D2D2D2)"
		};

		return (
			<input
				id={this.props.id}
				type="text"
				value={this.state.value}
				style={style}
				placeholder={this.props.placeholder || ""}
				onFocus={this._onFocus}
				onBlur={this._onBlur}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
			/>
		);
	}
}

export default Input;
