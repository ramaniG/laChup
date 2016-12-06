import { User } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'user.setAdditionalInfo'(pUserId = this.userId, pAge, pIcNo, pPhoneNo){
        check(pUserId, String);
        check(pAge, Number);
        check(pIcNo, String);
        check(pPhoneNo, String);

        console.log(`UserID : ${pUserId},Age ${pAge} : ,IC ${pIcNo} : ,Phone : ${pPhoneNo}`);

		    User.update({_id: pUserId}, {$set :{phoneNo: pPhoneNo, icNo: pIcNo, age: pAge, registered : true}});
	   }
  });
}
