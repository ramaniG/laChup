// import StateSelection from '../components/stateselection';
// import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
//
// export const composer = ({context, clearErrors, countryID}, onData) => {
//   const {Meteor, Collections} = context();
//   if (Meteor.subscribe('entity.allstates', countryID).ready()) {
//     const states = Collections.State.find({countryID}).fetch();
//     onData(null, {states});
//   } else {
//     onData();
//   }
// };
//
// export default composeAll(
//   composeWithTracker(composer),
//   useDeps()
// )(StateSelection);
