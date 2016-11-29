import {Ticket} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'ticket.getCurrentOrNewTicket'(SelectedSiteID, UserID) {
      check(SelectedSiteID, UserID, String);

      //var SelectedSiteID = Session.get('SelectedSiteID');
    	var lastTicket = Ticket.findOne({Site_ID : SelectedSiteID}, {sort:{Ticket_Number: -1}});
    	var newTicketNumber = "1";

    	if(lastTicket != null){
    		newTicketNumber = parseInt(lastTicket.Ticket_Number) + 1 + '';
    	}

    	var newStatusID = TicketStatusList.findOne({TicketStatusName: "New"}).TicketStatusID;

    	while (newTicketNumber.length < 4) {
    		newTicketNumber = "0" + newTicketNumber;
    	}

    	Ticket.insert({
    		Ticket_Number: newTicketNumber,
    		Site_ID: SelectedSiteID,
    		Requested_Date: new Date(),
    		Queue_Modified_Date: new Date(),
    		Service_Type_ID: 1,
    		User_ID: UserID,
    		Dispatched_By: 1,
    		Status_ID: newStatusID,
    		Serviced_By: 1,
    		Hold_Count: 0,
    		Dispatched_Date: new Date(),
    		Processed_Date: new Date(),
    		Service_Duration: 5,
    		Counter_ID: 1
    	});

    	console.log('Ticket Number ' + newTicketNumber + ' assigned.');
    }
  });

  Meteor.methods({
    'ticket.setTicketProcessed'(SelectedSiteID, UserID) {
		    var processedTicketStatusID = TicketStatusList.findOne({TicketStatusName: "Processed"}).TicketStatusID;
		      Ticket.update({_id: CurrentTicketID}, {$set :{Queue_Modified_Date: new Date(), Status_ID: processedTicketStatusID}})
	  }
  });

  Meteor.methods({
    'ticket.setTicketDiscardOrHold'({CurrentTicketID}){
    		var currentTicketHoldCount = Ticket.findOne({_id: CurrentTicketID}).Hold_Count;
    		if(currentTicketHoldCount >= 5){
    			var discardedTicketStatusID = TicketStatusList.findOne({TicketStatusName: "Discarded"}).TicketStatusID;
    			Ticket.update({_id: CurrentTicketID}, {$set :{Queue_Modified_Date: new Date(), Status_ID: discardedTicketStatusID, Hold_Count:5}});
    		}
    		else {
    			var holdTicketStatusID = TicketStatusList.findOne({TicketStatusName: "Hold"}).TicketStatusID;
    			Ticket.update({_id: CurrentTicketID}, {$set :{Queue_Modified_Date: new Date(), Status_ID: holdTicketStatusID}, $inc:{Hold_Count:1}});
    		}
    	}
  });

  Meteor.methods({
    'ticket.setTicketDiscard'({CurrentTicketID}){
		      var discardedTicketStatusID = TicketStatusList.findOne({TicketStatusName: "Discarded"}).TicketStatusID;
		      Ticket.update({_id: CurrentTicketID}, {$set :{Queue_Modified_Date: new Date(), Status_ID: discardedTicketStatusID}});
	   }
  });

  Meteor.methods({
    'ticket.setTicketDispatch'({CurrentTicketID}){
    		var dispatchedCounterID = prompt("To which counter?", "");
    		if(dispatchedCounterID != null){
    			var dispatchTicketStatusID = TicketStatusList.findOne({TicketStatusName: "Dispatched"}).TicketStatusID;
    			Ticket.update({_id: CurrentTicketID}, {$set :{Queue_Modified_Date: new Date(), Status_ID: dispatchTicketStatusID, Counter_ID: parseInt(dispatchedCounterID)}});
    		}
	  }
  });
}
