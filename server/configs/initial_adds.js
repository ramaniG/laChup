import {State, Country, Entity, Site, ServiceCounter, ServiceType} from '/lib/collections';

export default function () {
  addCountry();
  addStates();
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
