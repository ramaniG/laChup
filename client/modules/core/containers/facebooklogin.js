import FacebookLogin from '../components/facebooklogin';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.userId()) {
    if (Meteor.subscribe('user.getAdditinalInfo').ready()) {
      const userAdditionalData = Collections.User.find().fetch();
      onData(null, {
        loggedIn: Boolean(Meteor.userId()),
        loggingIn: Meteor.loggingIn(),
        userAddInfo: userAdditionalData[0]
      });
    } else {
      onData(null, {
        loggedIn: false,
        loggingIn: Meteor.loggingIn(),
        userAddInfo: null
      });
    }
  } else {
    onData(null, {
      loggedIn: false,
      loggingIn: Meteor.loggingIn(),
      userAddInfo: null
    });
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(FacebookLogin);
