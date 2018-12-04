import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import MasterAdmin from '/imports/ui/components/MasterAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubMasterAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const landingbg = {
      backgroundImage: 'url(/images/bg.png)',
      backgroundSize: 'cover',
      flex: '1',
    };
    return (
<<<<<<< HEAD
        <div style={landingbg}>
        <div className='club-master-admin'>
         <Container>
            <Header as="h2" textAlign="center" inverted>Club List</Header>
=======
        <div className='landing-background'>
         <Container>
            <Header as="h2" textAlign="center" className='header-style'>Club List</Header>
>>>>>>> dev
            <Card.Group centered>
              {this.props.clubs.map((club, index) => <MasterAdmin key={index} club={club}/>)}
            </Card.Group>
          </Container>
        </div>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubMasterAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('MasterAdmin');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClubMasterAdmin);
