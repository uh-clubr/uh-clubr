import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ClubAdmin from '/imports/ui/components/ClubAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='club-admin'>
        <div className='landing-background'>
          <Container>
            <Header as="h2" textAlign="center" className='header-style'>Club List</Header>
            <Card.Group centered>
              {this.props.clubs.map((club, index) => <ClubAdmin key={index} club={club}/>)}
            </Card.Group>
          </Container>
        </div>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ClubAdmin');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClubAdmin);
