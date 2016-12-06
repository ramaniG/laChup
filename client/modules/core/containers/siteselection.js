import SiteSelection from '../components/siteselection';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors, pEntityId}, onData) => {
  const {Meteor, Collections} = context();
  console.log(pEntityId);
  if (Meteor.subscribe('entity.allsites', pEntityId).ready()) {
    const sites = Collections.Site.find({entityID: pEntityId}).fetch();
    onData(null, {sites});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(SiteSelection);
