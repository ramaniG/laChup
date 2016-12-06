import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_adds.js';
import { Meteor } from 'meteor/meteor';

publications();
methods();
addInitialData();

Accounts.onCreateUser( ( options, user ) => {
  console.log(user);

  if (!user.services.facebook) {
    throw new Error('Expected login with Facebook only.');
  }

  user.registered = false;
  user.phoneNo = "";
  user.icNo = "";
  user.age = 0;

  return user;
});
