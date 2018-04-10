import Reflux from "reflux";
import QuestionActions from "../actions/QuestionActions";

var Question = {
	count: 0,
	question:[1,2]
};

class UIStore extends Reflux.Store {
	constructor() {
		super();
		this.notify = this.notify.bind(this);
		this.state = { QuestionStore: Question };
		this.listenToMany(QuestionActions);
	}

	onAdd(){
		this.trigger({
			count: Question.count++,
			question: Question.question.push(Question.count)
		})
		this.notify();
	}

	onRemove(){
		this.trigger({
			count: Question.count--,
			question: Question.question.pop(Question.count)

		})
		this.notify();
	}
	
	notify() {
		this.setState({ QuestionStore: Question });
	}
}

export default UIStore;
