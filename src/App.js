import React from "react";
import Reflux from "reflux";

// Store
import QuestionStore from "./stores/QuestionStore";

class App extends Reflux.Component {
	constructor(props) {
		super(props);
		this.stores = [QuestionStore];
	}

	render() {
		return <div className="App" />;
	}
}

export default App;
