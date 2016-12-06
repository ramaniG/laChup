import { check } from 'meteor/check';
import {State, Country, Entity, EntityType, Site, ServiceCounter, ServiceType} from '/lib/collections';

export default function () {
  Meteor.publish('entity.allcountry', function () {
    return Country.find();
  });

  Meteor.publish('entity.allstates', function (pCountryID = "1") {
    check(pCountryID, String);
    const selector = {countryID: pCountryID};
    return State.find(selector);
  });

  Meteor.publish('entity.allentitytype', function () {
    return EntityType.find();
  });

  Meteor.publish('entity.allentity', function (pEntityTypeId) {
    check(pEntityTypeId, String);
    const selector = {entitytypeid: pEntityTypeId};
    return Entity.find(selector);
  });

  Meteor.publish('entity.allsites', function (pEntityId) {
    check(pEntityId, String);
    const selector = {entityID: pEntityId};
    return Site.find(selector);
  });
}
