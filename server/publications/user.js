import { check } from 'meteor/check';
import { User } from '/lib/collections';

export default function () {
  Meteor.publish('user.getAdditinalInfo', function (userId = this.userId) {
    check(userId, String);
    return User.find({_id : userId});
  });
}
