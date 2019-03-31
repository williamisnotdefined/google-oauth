import React, { PureComponent } from "react";

import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// import { Creators }

class Home extends PureComponent {

	state = {

	};

	componentDidMount() {
		if (this.props.token) {

		}
	}

	openGooglePopup = () => {

		window.addEventListener("message", function(ev) {
			if (ev.data.message === "sending_token_to_client") {
				console.log(
					'deliverResult: ', ev.data.result
				);
				ev.source.close();
			}
		});

		window.open(
			'http://localhost:9001/auth/google',
			'',
			'height=570,width=500'
		);

	}

	render() {
		return (
			<div>
				{!this.props.token && <button type="button" onClick={this.openGooglePopup}>Logar</button>}
			</div>
		)
	}
}

const mapStateToProps = ({ auth }) => ({
	userName: auth.userName,
	photo: auth.photo,
	token: auth.token
});

// const mapDispatchToProps = dispatch => bindActionCreators({
// 	getUser: UserActions.getUser
// }, dispatch);

export default connect(mapStateToProps/*, mapDispatchToProps */)(Home);
