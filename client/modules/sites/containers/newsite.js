import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/newsite';

export const composer = ({context, clearErrors, countryID}, onData) => {

  const {Meteor, Collections} = context();
  if (Meteor.subscribe('entity.allstates', countryID).ready()) {
    const states = Collections.State.find({countryID}).fetch();
    onData(null, {states});
  } else {
    onData();
  }

  // const {LocalState} = context();
  // const error = LocalState.get('CREATE_COMMENT_ERROR');
  // onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.sites.create,
  update: actions.sites.update,
  delete: actions.sites.delete,
  clearErrors: actions.sites.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
