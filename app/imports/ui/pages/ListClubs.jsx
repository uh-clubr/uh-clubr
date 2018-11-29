/* eslint-disable max-len */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Dropdown } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {

  ClubFilter(type) {
    switch (type.value) {
      case 'Academic/Professional':
        return this.props.clubs.filter(Clubs.type === 'Academic/Professional').map((club, index) => <Club key={index}
                                                                                                          club={club}/>);
      case 'Political':
        return this.props.clubs.filter(Clubs.type === 'Political').map((club, index) => <Club key={index}
                                                                                              club={club}/>);
      case 'Sports/Leisure':
        return this.props.clubs.filter(Clubs.type === 'Sports/Leisure').map((club, index) => <Club key={index}
                                                                                                   club={club}/>);
      case 'Ethnic/Cultural':
        return this.props.clubs.filter(Clubs.type === 'Ethnic/Cultural').map((club, index) => <Club key={index}
                                                                                                    club={club}/>);
      case 'Service':
        return this.props.clubs.filter(Clubs.type === 'Service').map((club, index) => <Club key={index}
                                                                                            club={club}/>);
      case 'Fraternity/Sorority':
        return this.props.clubs.filter(Clubs.type === 'Fraternity/Sorority').map((club, index) => <Club key={index}
                                                                                                        club={club}/>);
      case 'Honorary Society':
        return this.props.clubs.filter(Clubs.type === 'Honorary Society').map((club, index) => <Club key={index}
                                                                                                     club={club}/>);
      case 'Religious/Spiritual':
        return this.props.clubs.filter(Clubs.type === 'Religious/Spiritual').map((club, index) => <Club key={index}
                                                                                                        club={club}/>);
      case 'Student Affairs':
        return this.props.clubs.filter(Clubs.type === 'Student Affairs').map((club, index) => <Club key={index}
                                                                                                    club={club}/>);
      case 'None':
        return this.props.clubs.map((club, index) => <Club key={index} club={club}/>);
      default:
        return this.props.clubs.map((club, index) => <Club key={index} club={club}/>);

    }
  }

  ClubTypes = [
    {
      text: 'none',
      value: 'none',
    },
    {
      text: 'Academic/Professional',
      value: 'Academic/Professional',
    },
    {
      text: 'Political',
      value: 'Political',
    },
    {
      text: 'Sports/Leisure',
      value: 'Sports/Leisure',
    },
    {
      text: 'Ethnic/Cultural',
      value: 'Ethnic/Cultural',
    },
    {
      text: 'Service',
      value: 'Service',
    },
    {
      text: 'Fraternity/Sorority',
      value: 'Fraternity/Sorority,',
    },
    {
      text: 'Honorary Society',
      value: 'Honorary Society',
    },
    {
      text: 'Student Affairs',
      value: 'Student Affairs',
    }];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (

        <div className='list-clubs'>
          <Container>
            <Header as="h1" textAlign="center">Club List</Header>
            <p>Select a filter from the options below.</p>
            <Card.Group centered>
              <Dropdown inverted placeholder='Select a filter' defaultValue={'none'} onChange={this.ClubFilter} fluid
                        selection options={this.ClubTypes}/>
            </Card.Group>
          </Container>
        </div>
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
