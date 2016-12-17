import {State, Country, Entity, Site, ServiceCounter, ServiceType} from '/lib/collections';

export default function () {
  Meteor.publish('entity.allcountry', function () {
    return Country.find();
  });

  Meteor.publish('entity.allstates', function (pCountryID = "1") {
    check(pCountryID, String);
    const selector = {countryID: pCountryID};
    return State.find(selector);
  });

  Meteor.publish('entity.allsite', function (pEntityID) {
    check(pEntityID, String);
    const selector = {entityID: pEntityID};
    return Site.find(selector);
  });

  Meteor.publish('entity.getsite', function (pSiteID) {
    check(pSiteID, String);
    const selector = {_id: pSiteID};
    return Site.find(selector);
  });
}
