import React from "react";
import Reflux from "reflux";

// Actions
import QuestionActions from "./actions/QuestionActions";

// Store
import QuestionStore from "./stores/QuestionStore";

// Components
import Card from "./components/Card.react";
import Input from "./components/Input.react";
import Response from "./components/Response.react";

var responsesCount = 0;

class App extends Reflux.Component {
	constructor(props) {
		super(props);
		this.stores = [QuestionStore];
		this._onPromptReturnFunction = this._onPromptReturnFunction.bind(this);
		this._onResponseReturnFunction = this._onResponseReturnFunction.bind(this);
		this._onResponseBackFunction = this._onResponseBackFunction.bind(this);
	}

	_onPromptReturnFunction(id, index) {
		if (this.state.QuestionStore.responses.length === 0) QuestionActions.addResponse();
		else document.getElementById(this.state.QuestionStore.responses[0].id).focus();
	}

	_onResponseReturnFunction(id, index) {
		if (index + 1 > this.state.QuestionStore.responses.length - 1) QuestionActions.addResponse();
		else document.getElementById(this.state.QuestionStore.responses[index + 1].id).focus();
	}

	_onResponseBackFunction(id, index) {
		if (index === 0) document.getElementById("prompt").focus();
		else if (index === this.state.QuestionStore.responses.length - 1) QuestionActions.removeResponse();
		else document.getElementById(this.state.QuestionStore.responses[index - 1].id).focus();
	}

	componentDidMount() {
		responsesCount = this.state.QuestionStore.responses.length;
	}

	componentDidUpdate() {
		if (responsesCount !== this.state.QuestionStore.responses.length) {
			document
				.getElementById(this.state.QuestionStore.responses[this.state.QuestionStore.responses.length - 1].id)
				.focus();
			responsesCount = this.state.QuestionStore.responses.length;
		}
	}

	render() {
		const style = {
			width: "100%",
			minHeight: "100vh",
			backgroundColor: "rgba(0, 0, 0, 0.05)",
			textAlign: "center",
			fontFamily: "Roboto",
			fontSize: "16px",
			color: "rgba(0, 0, 0, 0.87)"
		};

		const controlsStyle = {
			width: "100%",
			textAlign: "center",
			display: "inline-block",
			padding: "8px 0px"
		};

		const iconStyle = {
			color: "rgb(70, 180, 175)",
			margin: "4px",
			display: "inline-block",
			verticalAlign: "middle",
			cursor: "pointer",
			fontSize: "36px"
		};

		return (
			<div style={style}>
				<Card>
					<Input
						id="prompt"
						value={this.state.QuestionStore.prompt.text}
						placeholder="Please enter your question here"
						returnFunction={this._onPromptReturnFunction}
					/>
					{this.state.QuestionStore.responses.map((item, index, arr) => (
						<Response
							item={item}
							value={item.id === this.state.QuestionStore.value}
							key={index}
							index={index}
							returnFunction={this._onResponseReturnFunction}
							backFunction={this._onResponseBackFunction}
						/>
					))}
					<div style={controlsStyle}>
						<i style={iconStyle} className="material-icons" onClick={QuestionActions.removeResponse}>
							remove_circle_outline
						</i>
						<i style={iconStyle} className="material-icons" onClick={QuestionActions.addResponse}>
							add_circle_outline
						</i>
					</div>
				</Card>
			</div>
		);
	}
}

export default App;
