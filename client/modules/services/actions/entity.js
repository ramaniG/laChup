export default {
  createSite({Meteor, LocalState}, pEntityID, pName, pStateID) {
    if (!pEntityID) {
      return LocalState.set('CREATE_SITE_ERROR', 'Entity is required.');
    }

    if (!pName) {
      return LocalState.set('CREATE_SITE_ERROR', 'Name is required.');
    }

    if (!pStateID) {
      return LocalState.set('CREATE_SITE_ERROR', 'State is required.');
    }

    LocalState.set('CREATE_SITE_ERROR', null);

    const id = Meteor.uuid();
    Meteor.call('site.createSite', id, pEntityID, pName, pStateID, (err) => {
      if (err) {
        return LocalState.set('CREATE_SITE_ERROR', err.message);
      }
    });
  },

  editSite({Meteor, LocalState}, pEntityID, pName, pStateID) {
    if (!pEntityID) {
      return LocalState.set('EDIT_SITE_ERROR', 'Entity is required.');
    }

    if (!pName) {
      return LocalState.set('EDIT_SITE_ERROR', 'Name is required.');
    }

    if (!pStateID) {
      return LocalState.set('EDIT_SITE_ERROR', 'State is required.');
    }

    LocalState.set('EDIT_SITE_ERROR', null);

    const id = Meteor.uuid();
    Meteor.call('site.createSite', id, pEntityID, pName, pStateID, (err) => {
      if (err) {
        return LocalState.set('CREATE_SITE_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_SITE_ERROR', null);
  }
};
