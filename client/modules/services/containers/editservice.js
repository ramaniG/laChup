import EditSite from '../components/editsite';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors, pSiteID}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('CREATE_SITE_ERROR');

  if (pSiteID != "" && Meteor.subscribe('entity.getsite', pSiteID).ready() && Meteor.subscribe('entity.allstates', "1").ready()) {
    const sites = Collections.Site.find({_id : pSiteID}).fetch();
    if (sites.length > 0) {
      if (error) {
        onData(null, {site: sites[0], error});
      } else {
        onData(null, {site: sites[0]});
      }
    } else {
      onData();
    }
  } else {
    if (error) {
      onData(null, {error});
    } else {
      onData();
    }
  }
};

export const depsMapper = (context, actions) => ({
  createSite: actions.Entity.createSite,
  clearErrors: actions.Entity.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditSite);
