import Registration from '../components/registration';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('user.getAdditinalInfo').ready()) {
    const userAdditionalData = Collections.User.find().fetch();
    onData(null, {userAddInfo: userAdditionalData[0]});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  userSetAdditonalInfo: actions.User.userSetAdditonalInfo,
  clearErrors: actions.User.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Registration);
