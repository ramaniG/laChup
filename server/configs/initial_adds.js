import {State, Country, Entity, Site, ServiceCounter, ServiceType} from '/lib/collections';

export default function () {
  addUser();
  addCountry();
  addStates();
  var entityID = addEntity();
  if (entityID){
    var siteID = addSites(entityID);
  }

  if (siteID){
    var serviceID = addServiceTypes(siteID);
  }

  if (serviceID){
    addServiceCounter(siteID, serviceID.id1, serviceID.id2);
  }
}

function addUser() {
  if (Meteor.users.find().fetch().length === 0)
  {
    console.log('Creating users: ');

    var users = [
        {name:"Normal User",email:"normal@example.com",roles:[], group: 'user'},
        {name:"Operator User",email:"operator@example.com",roles:['operator'], group: 'entity'},
        {name:"SiteAdmin User",email:"site.admin@example.com",roles:['site-admin'], group: 'entity'},
        {name:"EntityAdmin User",email:"entity.admin@example.com",roles:['entity-admin'], group: 'entity'},
        {name:"SuperAdmin User",email:"super.admin@example.com",roles:['super-admin'], group: Roles.GLOBAL_GROUP}
      ];

    _.each(users, function (userData) {
      var id,
          user;

      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "apple1",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles, userData.group);

    });
  }
}

function addCountry() {
  if (!Country.findOne())
  {
    Country.insert({
      _id : "1",
      name : "Malaysia",
      shortname : "MSIA",
      currency : "MYR",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });
  }
}

function addStates() {
  if (!State.findOne()) {
    State.insert({
      _id : "1",
      name : "WP Kuala Lumpur",
      shortname : "KL",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "2",
      name : "Selangor",
      shortname : "SGR",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "3",
      name : "Johor",
      shortname : "JHR",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "4",
      name : "Penang",
      shortname : "PNG",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "5",
      name : "Negeri Sembilan",
      shortname : "NSM",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "6",
      name : "Kedah",
      shortname : "KDH",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "7",
      name : "Melaka",
      shortname : "MLK",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "8",
      name : "WP Putrajaya",
      shortname : "PJY",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "9",
      name : "Perak",
      shortname : "PRK",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "10",
      name : "Pahang",
      shortname : "PHG",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "11",
      name : "Kelantan",
      shortname : "KLT",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "12",
      name : "Perlis",
      shortname : "PRS",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "13",
      name : "Terengganu",
      shortname : "TGN",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "14",
      name : "Sabah",
      shortname : "SBH",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "15",
      name : "Sarawak",
      shortname : "SRW",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    State.insert({
      _id : "16",
      name : "WP Labuan",
      shortname : "LBN",
      countryID : "1",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });
  }
}

function addEntity() {
  if (!Entity.findOne())
  {
    var id = Random.id();

    Entity.insert({
      _id : id,
      name : "Telecom A",
      shortname : "TA",
      type : "Telecom",
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    return id;
  }
}

function addSites(pEntityID) {
  if (!Site.findOne({entityID : pEntityID}))
  {
    var id = Random.id();

    Site.insert({
      _id : id,
      name : "TA Site Midvalley",
      entityID : pEntityID,
      cityID : 1,
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    return id;
  }
}

function addServiceTypes(pSiteID) {
  if (!ServiceType.findOne({siteID : pSiteID}))
  {
    var id1 = Random.id();

    ServiceType.insert({
      _id : id1,
      name : "Billing",
      siteID : pSiteID,
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    var id2 = Random.id();

    ServiceType.insert({
      _id : id2,
      name : "Customer Service",
      siteID : pSiteID,
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });

    return {id1, id2};
  }
}

function addServiceCounter(pSiteID, pServiceTypeID1, pServiceTypeID2) {
  if (!ServiceCounter.findOne({siteID : pSiteID, serviceTypeID : pServiceTypeID1}))
  {
    var id1 = Random.id();

    ServiceCounter.insert({
      _id : id1,
      name : "Counter 1",
      siteID : pSiteID,
      isOpen : true,
      serviceTypeID : pServiceTypeID1,
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });
  }

  if (!ServiceCounter.findOne({siteID : pSiteID, serviceTypeID : pServiceTypeID2}))
  {
    var id2 = Random.id();

    ServiceCounter.insert({
      _id : id2,
      name : "Counter 2",
      siteID : pSiteID,
      isOpen : true,
      serviceTypeID : pServiceTypeID2,
      createdAt : new Date(),
      createdBy : 0,
      updatedAt : new Date(),
      updatedBy : 0
    });
  }

  return {id1, id2};
}
