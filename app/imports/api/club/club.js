/* eslint-disable max-len */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Clubs = new Mongo.Collection('Clubs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ClubSchema = new SimpleSchema({
  name: String,
  type: {
    type: String,
    allowedValues: ['Academic/Professional', 'Political', 'Sports/Leisure', 'Ethnic/Cultural', 'Service', 'Fraternity/Sorority', 'Honorary Society', 'Religious/Spiritual', 'Student Affairs'],
  },
  contact_person: String,
  contact_email: String,
  rio_email: String,
  rio_website: String,
  rio_facebook: { type: String, optional: true },
  rio_instagram: { type: String, optional: true },
  rio_twitter: { type: String, optional: true },
  image: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clubs.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Clubs, ClubSchema };
