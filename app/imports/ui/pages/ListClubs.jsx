/* eslint-disable max-len */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Dropdown, Segment } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange(event, data) {
    console.log(data.value);
    this.setState({ search: data.value });
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
    const clubs = (this.state.search === 'none') ? this.props.clubs : this.props.clubs.filter(club => club.type.indexOf(this.state.search) !== -1);
    return (
        <div className='landing-background'>
          <div className='list-clubs'>
            <Container>
              <Header as="h1" textAlign="center" inverted className='header-style'>Club Directory</Header>
              <Segment>
              <p>Select a filter from the options below.</p>
              </Segment>
              <Dropdown selection defaultValue={'none'} onChange={(event, data) => this.handleChange(event, data)} options={this.ClubTypes} fluid/>
              <Card.Group centered>
                {clubs.map((club, index) => <Club key={index} club={club}/>)}
              </Card.Group>
            </Container>
          </div>
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
