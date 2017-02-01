import ListSites from '../components/listservices';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors, pEntityID}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('entity.allservice', pEntityID).ready() && Meteor.subscribe('entity.allstates', "1").ready()) {
    const allSites = Collections.Site.find({entityID : pEntityID}).fetch();
    onData(null, {
        services: allSites
    });
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ListSites);
