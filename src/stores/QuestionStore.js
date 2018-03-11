import Reflux from "reflux";
import QuestionActions from "../actions/QuestionActions";

var Question = {
	prompt: {
		text: ""
	},
	responses: [
		{
			id: 0,
			text: ""
		},
		{
			id: 1,
			text: ""
		}
	],
	value: 0,
	maxID: 1
};

class UIStore extends Reflux.Store {
	constructor() {
		super();
		this.notify = this.notify.bind(this);
		this.state = { QuestionStore: Question };
		this.listenToMany(QuestionActions);
	}

	onSetValue(value) {
		Question.value = Question.value === value ? "" : value;
		this.notify();
	}

	onSetText(id, value) {
		if (id === "prompt") Question.prompt.text = value;
		else {
			for (var i = 0; i < Question.responses.length; i++) {
				if (Question.responses[i].id === id) {
					Question.responses[i].text = value;
					break;
				}
			}
		}

		this.notify();
	}

	onRemoveResponse() {
		Question.responses.splice(Question.responses.length - 1, 1);
		this.notify();
	}

	onAddResponse() {
		Question.responses.push({ id: ++Question.maxID, text: "" });
		this.notify();
	}

	notify() {
		this.setState({ QuestionStore: Question });
	}
}

export default UIStore;
