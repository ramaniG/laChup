export default function ({Collections, Meteor}) {
  Meteor.methods({
    'site.createSite'(pId, pEntityID, pName, pStateID) {
      check(pId, String);
      check(pEntityID, String);
      check(pName, String);
      check(pStateID, String);

      Collections.Site.insert({
        _id : pId,
        name : pName,
        entityID : pEntityID,
        stateID : pStateID
      });
    }
  });
}
