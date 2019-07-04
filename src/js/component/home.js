import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ posts: data });
			});
	}

	render() {
		console.log("render");
		let peo = this.state.posts.map((item, i) => {
			return (
				<div key={i}>
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								{item.body}
							</a>
						</div>
					</div>
				</div>
			);
		});

		return <div>{peo}</div>;
	}
}
