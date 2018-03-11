import Reflux from "reflux";
import QuestionActions from "../actions/QuestionActions";

var Question = {};

class UIStore extends Reflux.Store {
	constructor() {
		super();
		this.notify = this.notify.bind(this);
		this.state = { QuestionStore: Question };
		this.listenToMany(QuestionActions);
	}

	notify() {
		this.setState({ QuestionStore: Question });
	}
}

export default UIStore;
