export default function ({Collections, Meteor}) {
  Meteor.methods({
    'maintenance.createSite'(_id, name, location) {
      //const saving = true;
      //const createdAt = new Date();
      //const author = 'Me';
      Collections.Site.insert({
        _id, name, location
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
