import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Image, List, Segment } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class UserPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='user'>
          <Container>
            <Header as="h2" textAlign="center">Profile</Header>
            <Image size='small' circular src="/images/meteor-logo.png"/>
            <Segment.Group horizontal>
              <Segment>
                About:
              </Segment>
              <Segment>
                Interests:
                <List bulleted>
                  <List.Item>Tags</List.Item>
                  <List.Item>or</List.Item>
                  <List.Item>interests</List.Item>
                </List>
              </Segment>
            </Segment.Group>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Club</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Tags</Table.HeaderCell>
                  <Table.HeaderCell>Leave</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Image size='small' circular src="/images/meteor-logo.png"/>
                    Club
                  </Table.Cell>
                  <Table.Cell>Description</Table.Cell>
                  <Table.Cell>Size</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>Tags</List.Item>
                      <List.Item>or</List.Item>
                      <List.Item>interests</List.Item>
                    </List>
                  </Table.Cell>
                  <Table.Cell selectable><a href='#'>Leave Club</a></Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer/>
            </Table>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
UserPage.propTypes = {
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
})(UserPage);
