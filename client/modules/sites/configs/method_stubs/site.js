export default function ({Collections, Meteor}) {
  Meteor.methods({
    'maintenance.createSite'(pId, pName, pLocation) {
      check(pId, String);
      check(pName, String);
      check(pLocation, String);
      //const saving = true;
      //const createdAt = new Date();
      //const author = 'Me';
      Collections.Site.insert({
        _id : pId,
        name : pName,
        location : pLocation
      });
    },
    'maintenance.updateSite'(selectedSite, location) {
      Collections.Site.update({ _id: selectedSite }, { $set: {
        location
      }});
    },
    'maintenance.deleteSite'(selectedSite, location) {
      Collections.Site.remove({ _id: selectedSite });
    },
  });
}
