/* eslint-disable max-len */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Profiles = new Mongo.Collection('Profiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ProfileSchema = new SimpleSchema({
  name: String,
  interest: {
    type: String,
    allowedValues: ['None', 'Academic/Professional', 'Political', 'Sports/Leisure', 'Ethnic/Cultural', 'Service', 'Fraternity/Sorority', 'Honorary Society', 'Religious/Spiritual', 'Student Affairs'],
  },
  major: String,
  email: String,
  bio: { type: String, optional: true },
  image: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfileSchema };
