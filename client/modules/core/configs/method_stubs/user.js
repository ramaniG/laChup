import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'user.setAdditionalInfo'(pUserId = Meteor.userId(), pAge, pIcNo, pPhoneNo){
        check(pUserId, String);
        check(pAge, Number);
        check(pIcNo, String);
        check(pPhoneNo, String);

        console.log(`UserID : ${pUserId},Age ${pAge} : ,IC ${pIcNo} : ,Phone : ${pPhoneNo}`);

		    Collections.User.update({_id: pUserId}, {$set :{phoneNo: pPhoneNo, icNo: pIcNo, age: pAge, registered : true}});
	   }
  });
}
