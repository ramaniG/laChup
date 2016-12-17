import {Site} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'site.createSite'(pId, pEntityID, pName, pStateID) {
      check(pId, String);
      check(pEntityID, String);
      check(pName, String);
      check(pStateID, String);

      Site.insert({
        _id : pId,
        name : pName,
        entityID : pEntityID,
        stateID : pStateID
      });
    }
  });

  Meteor.methods({
    'site.editSite'(pId, pEntityID, pName, pStateID) {
      check(pId, String);
      check(pEntityID, String);
      check(pName, String);
      check(pStateID, String);

      Site.insert({
        _id : pId,
        name : pName,
        entityID : pEntityID,
        stateID : pStateID
      });
    }
  });
}
