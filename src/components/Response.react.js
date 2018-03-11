import React, { Component } from "react";

// Actions
import QuestionActions from "../actions/QuestionActions";

// Components
import Input from "./Input.react";

class Response extends Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		QuestionActions.setValue(this.props.item.id);
	}

	render() {
		const style = {
			width: "100%",
			display: "inline-block",
			padding: "8px 0px"
		};

		const radioStyle = {
			width: this.props.value ? "8px" : "18px",
			height: this.props.value ? "8px" : "18px",
			borderRadius: "50%",
			border: this.props.value ? "6px solid rgb(70, 180, 175)" : "1px solid rgb(70, 180, 175)",
			marginRight: "8px",
			display: "inline-block",
			verticalAlign: "middle",
			cursor: "pointer",
			transition: "all .1s ease"
		};

		return (
			<div style={style}>
				<div style={radioStyle} onClick={this._onChange} />
				<Input
					id={this.props.item.id}
					value={this.props.item.text}
					width="calc(100% - 32px - 60px)"
					placeholder="Enter response option"
					index={this.props.index}
					returnFunction={this.props.returnFunction}
					backFunction={this.props.backFunction}
				/>
			</div>
		);
	}
}

export default Response;
