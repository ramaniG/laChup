import {Meteor} from 'meteor/meteor';

export default function () {

  Meteor.publish('users.current', function () {
    console.log(Roles.getGroupsForUser(this.userId));
    console.log(Roles.getRolesForUser(this.userId, Roles.getGroupsForUser(this.userId)[0]));
    return Meteor.users.find(this.userId);
  });
}
