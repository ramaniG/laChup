import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'user.add.facebook'(_id, firstname, lastname, email, gender, facebookid) {
      check(firstname, String);
      check(lastname,  String);
      check(email,  String);
      check(gender,  String);
      check(facebookid, String);

      const createdAt = new Date();
      const user = {_id, firstname, lastname, email, gender, facebookid, createdAt};

      Collections.User.insert(user);

      console.log(`Added facebook user : ${firstname}, ID : ${_id}`);
    }
  });

  Meteor.methods({
    'user.add'(_id, mobileno, nric, gender, ethnic, address, city, postcode, state, country, dob, weight, height, emergencyname, emergencymobileno, emergencyrelation) {
      check(firstname, lastname, email, nric, gender, ethnic, address, city, state, country, dob, emergencyname, emergencyrelation, String);
      check(mobileno, postcode, weight, height, emergencymobileno, Number);

      const createdAt = new Date();
      const user = {firstname, lastname, email, mobileno, nric, gender, ethnic, address, city, postcode, state, country, dob, weight, height, emergencyname, emergencymobileno, emergencyrelation, createdAt};

      var _id = Collections.User.insert(user);

      console.log(`Added user : ${firstname}, ID : ${_di}`);
    }
  });

  Meteor.methods({
    'user.addskillset'(_id, skill, value) {
      check(_id, skill, value, String);

      const updateAt = new Date();

      Collections.User.update(
        {"_id" : _id},
        {"updateAt" : updateAt },
        { $addToSet : { "skill" : [skill, value]}}
      );

      console.log(`Added New Skill for user ID : ${_di}`);
    }
  });
}
