import EntitySelection from '../components/entityselection';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors, pEntitytypeid}, onData) => {
  const {Meteor, Collections} = context();
  console.log(pEntitytypeid);
  if (Meteor.subscribe('entity.allentity', pEntitytypeid).ready()) {
    const entities = Collections.Entity.find({entitytypeid: pEntitytypeid}).fetch();
    onData(null, {entities});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(EntitySelection);
