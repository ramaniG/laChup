import {Site} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'maintenance.createSite'(_id, name, location) {
      //const saving = true;
      //const createdAt = new Date();
      //const author = 'Me';
      Site.insert({
        _id, name, location
      });
    }
  });
}
