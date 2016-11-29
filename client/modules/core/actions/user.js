import { Random } from 'meteor/random'

export default {
  userAddFacebook({Meteor, LocalState, FlowRouter}, firstname, lastname, email, gender, facebookid) {
    if (!firstname || !lastname || !email || !facebookid) {
      return LocalState.set('SAVING_ERROR', 'Not a valid facebook account!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Random.id();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('user.add.facebook', id, firstname, lastname, email, gender, facebookid, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/registerpersonalinfo/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
