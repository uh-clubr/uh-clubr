/* eslint-disable max-len */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {

  /*
  clubs = [
    {
      name: 'Grey Hats at UHM',
      type: 'Academic/Professional',
      contact_person: 'Olivia Murray',
      contact_email: 'omurray4@hawaii.edu',
      rio_email: 'greyhats@hawaii.edu',
      rio_website: 'http://uhmgreyhats.github.io',
      rio_facebook: '',
      rio_instagram: '',
      rio_twitter: '',
      image: 'http://www.ics.hawaii.edu/wp-content/uploads/2013/08/small-greyhats-teamSpr2011.jpg',
// eslint-disable-next-line max-len
      description: 'The Grey Hats is a student-led, extracurricular organization focused on real-world training for cyber defense. Membership gives students an outstanding opportunity to learn and apply critical skills, attack and defend systems, and to network with others interested in modern security issues.',
    },
    {
      name: 'Travel2Change',
      type: 'Student Affairs',
      contact_person: 'Angela Ziggy Kitsou',
      contact_email: 'angelazk@hawaii.edu',
      rio_email: 'uhm@travel2change.org',
      rio_website: 'travel2change.org',
      rio_facebook: 'https://www.facebook.com/travel2change',
      rio_instagram: 'https://www.instagram.com/travel2change/',
      rio_twitter: '',
      image: 'http://travel2change.org/wp-content/uploads/2017/11/change.png',
      description: 'We all love to travel. But let’s face it—travel can create social and environmental problems. At travel2change we believe that by exploring the world, we can better it. Discover fun and impactful activities offered by local communities. Together we can transform tourism so that local communities benefit.  travel2change is a Hawaii based 501(c)(3) nonprofit organization.',
    },
  ];
  */

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
            {this.props.clubs.map((club, index) => <Club key={index} club={club}/>)}
            {/* this.clubs.filter(club => club.type === 'Student Affairs').map((club, index) => <Club key={index} club={club}/>) */}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Club documents in the props. */
ListClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Club documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClubs);
