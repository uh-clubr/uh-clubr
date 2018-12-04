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
  addedQuestion1: {
    type: String,
    allowedValues: [
      'We would get along if you...',
      'If we had a million dollars, we would...',
      'After class you would find us...',
      'On a Friday afternoon, you would find us...',
      'On a weekend, you would find us...',
      'You would probably find us talking about...',
      'If you come to our meetings, you get free...',
      'Favorite quote:',
      '3 words to describe us are...',
      'We could not live without...',
      'What we love the most about our club is...',
    ],
    optional: true,
  },
  addedAnswer1: {
    type: String,
    optional: true,
  },
  addedQuestion2: {
    type: String,
    allowedValues: [
      'We would get along if you…',
      'If we had a million dollars, we would…',
      'After class you would find us…',
      'On a Friday afternoon, you would find us…',
      'On a weekend, you would find us…',
      'You would probably find us talking about...',
      'If you come to our meetings, you get free...',
      'Favorite quote:',
      '3 words to describe us are...',
      'We could not live without...',
      'What we love the most about our club is...',
    ],
    optional: true,
  },
  addedAnswer2: {
    type: String,
    optional: true,
  },
  addedQuestion3: {
    type: String,
    allowedValues: [
      'We would get along if you…',
      'If we had a million dollars, we would…',
      'After class you would find us…',
      'On a Friday afternoon, you would find us…',
      'On a weekend, you would find us…',
      'You would probably find us talking about...',
      'If you come to our meetings, you get free...',
      'Favorite quote:',
      '3 words to describe us are...',
      'We could not live without...',
      'What we love the most about our club is...',
    ],
    optional: true,
  },
  addedAnswer3: {
    type: String,
    optional: true,
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clubs.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Clubs, ClubSchema };
