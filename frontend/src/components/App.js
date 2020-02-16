import React, { Component } from "react";
import { render } from "react-dom";
import Title;
//import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loaded: false,
			placeholder: "Loading",
		};
	}

	componentDidMount(){
		fetch("/videos")
			.then(response => {
				if (response.status > 400) {
					return this.setState(() => {
						return { placeholder: "Something went wrong!" };
					});
				}
				return response.json()
			})
			.then(data => {
				this.setState(() => {
					return {
						data,
						loaded: true
					};
				});
			});
	}

	render() {
		return (
			<div>
				Hello from react
				<ul>
					{this.state.data.map(video => {
						return (
							<div>
								<Title>
								Video On:
								</Title>
								<li key={video.id}>
									{video.title} - {video.speaker}
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
