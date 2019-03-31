import React, { PureComponent } from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { Creators } 

class Home extends PureComponent {

	state = {

	};

	componentDidMount() {
		console.log('this.props: ', this.props);
		if (this.props.token) {

		}
	}

	openGooglePopup = () => {
		window.open(
			'http://localhost:9001/auth/google',
			'popUpWindow',
			'height=570,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
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
