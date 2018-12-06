import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/profile/profile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  /* console.log(`  Adding: ${data.name} (${data.owner})`); */
  Profiles.insert(data);
}

/** Initialize the collection if empty. */
if (Profiles.find().count() === 0) {
  if (Meteor.settings.defaultProfile) {
    /* console.log('Creating default profile.'); */
    Meteor.settings.defaultProfile.map(data => addData(data));
  }
}

/** This subscription publishes all documents regardless of user, but only if the logged in user is the ClubAdmin. */
Meteor.publish('Profiles', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.find({ owner: username });
  }
  return this.ready();
});
