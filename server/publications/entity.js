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
}
