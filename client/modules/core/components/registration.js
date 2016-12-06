import React from 'react';

class Registration extends React.Component {
  render() {
    const {error} = this.props;
    const { loggedIn, userAddInfo} = this.props;
    const facebook = userAddInfo.services.facebook;
    const facebookPic = "http://graph.facebook.com/"+ facebook.id +"/picture/";

    console.log(facebook);

    return (
        <form onSubmit={this.create.bind(this)}>
          <h2>Personal Info</h2>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <img src={facebookPic} /> <br />
          First name : <input ref="fName" type="Text" value={facebook.first_name} readOnly="true" /> <br />
          Last name : <input ref="lName" type="Text" value={facebook.last_name} readOnly="true" /> <br />
          Email : <input ref="email" type="Text" value={facebook.email} readOnly="true" /> <br/>
          Gender : <input ref="gender" type="Text" value={facebook.gender} readOnly="true" /> <br/>
          Age : <input ref="age" type="Number"  max="99" maxLength="2" minLength="1" min="12"/> <br/>
          IC No : <input ref="ic" type="Text" maxLength="14" minLength="14" /> <span>(format eg : xxxxxx-xx-xxxx )</span> <br/>
          Phone No : <input ref="phone" type="Text" maxLength="15" minLength="10" /> <br/>
          <button onClick={this.goBack}>Cancel</button>
          <input type="reset" name="reset" value="Reset" />
          <input type="submit" name="save" value="Register" />
        </form>
    );
  }

  create(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { age, ic, phone} = this.refs;

    // Check IC
    var patt = new RegExp(/^\d{6}-\d{2}-\d{4}$/);
    if (!patt.test(ic.value)) {
      alert("Please use the correct IC format as mentioned.");
      return;
    }

    const {userSetAdditonalInfo} = this.props;
    userSetAdditonalInfo(Meteor.userId(), age.valueAsNumber, ic.value, phone.value);

  }

  goBack() {
    FlowRouter.go("main");
  }
}

export default Registration;
