import {Mongo} from 'meteor/mongo';

export const TicketStatusList = new Mongo.Collection('TicketStatus');
export const Ticket = new Mongo.Collection('Ticket');

export const State = new Mongo.Collection('State');
export const Country = new Mongo.Collection('Country');

export const Entity = new Mongo.Collection('Entity');
export const Site = new Mongo.Collection('Site');
export const ServiceCounter = new Mongo.Collection('ServiceCounter');
export const ServiceType = new Mongo.Collection('ServiceType');
export const Operator = new Mongo.Collection('Operator');
