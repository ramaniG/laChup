import EntityTypeSelection from '../components/entitytypeselection';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('entity.allentitytype').ready()) {
    const entitytypes = Collections.EntityType.find().fetch();
    onData(null, {entitytypes});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(EntityTypeSelection);
