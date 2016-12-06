import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Meteor } from 'meteor/meteor';

class LoginFacebook extends React.Component {
  render() {
    const {error, loggingIn} = this.props;

    if (loggingIn){
      return (
        <div>
          Logging In
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.facebookLogin.bind(this)} data-social-login="loginWithFacebook" type="button" className="btn">
            <i className="fa fa-facebook"></i> Sign in with Facebook
          </button>
        </div>
      );
    }
  }

  componentDidUpdate() {
    const { loggedIn, userAddInfo} = this.props;
    if (loggedIn) {
      if (userAddInfo.registered) {
        FlowRouter.go('entitytypeselect');
      } else {
        FlowRouter.go('registeruser');
      }
    }
  }

  facebookLogin(currentObject) {
    Meteor.loginWithFacebook({ requestPermissions: ['email']}, function(err){
        if (err) {
            throw new Meteor.Error("Facebook login failed" + err);
            alert("Facebook login failed");
        }
    });
  }
}

export default LoginFacebook;
