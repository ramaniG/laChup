import {Site} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'maintenance.createSite'(pId, pName, pLocation) {
      check(pId, String);
      check(pName, String);
      check(pLocation, String);
      //const saving = true;
      //const createdAt = new Date();
      //const author = 'Me';
      Site.insert({
        _id : pId,
        name : pName,
        location : pLocation
      });
    }
  });
}
