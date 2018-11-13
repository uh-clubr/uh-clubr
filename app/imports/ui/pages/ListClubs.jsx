/* eslint-disable max-len */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import Club from '/imports/ui/components/Club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {

  clubs = [
    {
      name: 'Grey Hats at UHM',
      type: 'Academic/Professional',
      contactperson: 'Olivia Murray',
      contactemail: 'omurray4@hawaii.edu',
      rioemail: 'greyhats@hawaii.edu',
      riowebsite: 'greyhats@hawaii.edu',
      riofacebook: '',
      rioinstagram: '',
      riotwitter: '',
      image: '',
// eslint-disable-next-line max-len
      description: 'The Grey Hats is a student-led, extracurricular organization focused on real-world training for cyber defense. Membership gives students an outstanding opportunity to learn and apply critical skills, attack and defend systems, and to network with others interested in modern security issues.',
    },
    {
      name: 'Travel2Change',
      type: 'Student Affairs',
      contactperson: 'Angela Ziggy Kitsou',
      contactemail: 'angelazk@hawaii.edu',
      rioemail: 'uhm@travel2change.org',
      riowebsite: 'travel2change.org',
      riofacebook: 'https://www.facebook.com/travel2change',
      rioinstagram: 'https://www.instagram.com/travel2change/',
      riotwitter: '',
      image: '',
      description: '',
    },
  ];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Club List</Header>
          <Card.Group centered>
            {/* this.clubs.map((club, index) => <Club key={index} club={club}/>) */}
            {this.clubs.filter(club => club.type === 'Student Affairs').map((club, index) => <Club key={index} club={club}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubs.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClubs);
