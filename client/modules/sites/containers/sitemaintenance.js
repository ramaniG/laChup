import SiteMaintenance from '../components/sitemaintenance';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors, pEntityID}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('CREATE_SITE_ERROR');

  if (Meteor.subscribe('entity.allsite', pEntityID).ready() && Meteor.subscribe('entity.allstates', "1").ready()) {
    const allSites = Collections.Site.find({entityID : pEntityID}).fetch();
    if (error) {
      onData(null, {
        sites: allSites,
        error
      });
    } else {
      onData(null, {
        sites: allSites
      });
    }

  } else {
    if (error) {
      onData(null, {error});
    } else {
      onData();
    }
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  createSite: actions.Entity.createSite,
  clearErrors: actions.Entity.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SiteMaintenance);
