import React from "react";
import Reflux from "reflux";
import './App.css'

// Store
import QuestionStore from "./stores/QuestionStore";
import QuestionComponent from "./components/QuestionComponent";

class App extends Reflux.Component {
	constructor(props) {
		super(props);
		this.stores = [QuestionStore];
	}

	render() {
		return <div className="App" >
		<QuestionComponent/>
		</div>;
	}
}

export default App;
