import React, { Component } from "react";

class Card extends Component {
	render() {
		const style = {
			width: "100%",
			maxWidth: "calc(800px - 32px)",
			display: "inline-block",
			verticalAlign: "middle",
			backgroundColor: "white",
			boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
			textAlign: "left",
			padding: "16px",
			marginTop: "10%"
		};

		return <div style={style}>{this.props.children}</div>;
	}
}

export default Card;
