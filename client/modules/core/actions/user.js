export default {
  userSetAdditonalInfo({Meteor, LocalState, FlowRouter}, pUserId, pAge, pIcNo, pPhoneNo) {
    if (!pUserId || !pAge || !pIcNo || !pPhoneNo) {
      return LocalState.set('SAVING_ERROR', 'Invalid or empty info.');
    }

    LocalState.set('SAVING_ERROR', null);

    Meteor.call('user.setAdditionalInfo', pUserId, pAge, pIcNo, pPhoneNo , (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });

    FlowRouter.go('entitytypeselect');
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
