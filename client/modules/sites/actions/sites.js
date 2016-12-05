export default {
  create({Meteor, LocalState}, name, location) {
    if (!name) {
      return LocalState.set('CREATE_SITE_ERROR', 'Site name is required.');
    }

    if (!location) {
      return LocalState.set('CREATE_SITE_ERROR', 'Location is required.');
    }

    LocalState.set('CREATE_SITE_ERROR', null);

    const id = Meteor.uuid();
    Meteor.call('maintenance.createSite', id, name, location, (err) => {
      if (err) {
        return LocalState.set('CREATE_SITE_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SITE_ERROR', null);
  },

  update({Meteor, LocalState}, selectedSite, location) {
    if (!selectedSite) {
      return LocalState.set('UPDATE_SITE_ERROR', 'Site id is required.');
    }

    if (!location) {
      return LocalState.set('UPDATE_SITE_ERROR', 'Location is required.');
    }

    LocalState.set('UPDATE_SITE_ERROR', null);

    Meteor.call('maintenance.updateSite', selectedSite, location, (err) => {
      if (err) {
        return LocalState.set('UPDATE_SITE_ERROR', err.message);
      }
    });
  },

  delete({Meteor, LocalState}, selectedSite) {
    if (!selectedSite) {
      return LocalState.set('DELETE_SITE_ERROR', 'Site id is required.');
    }

    LocalState.set('DELETE_SITE_ERROR', null);

    Meteor.call('maintenance.deleteSite', selectedSite, (err) => {
      if (err) {
        return LocalState.set('DELETE_SITE_ERROR', err.message);
      }
    });
  },

};
