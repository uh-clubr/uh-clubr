import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

  }

  onClick() {
    /* eslint-disable-next-line */
    const text = confirm('Do you really want to delete this contact?');
    if (text === true) {
      Club.remove(this.props.club._id, this.deleteCallback);
    }
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='left' src={this.props.club.image}/>
            <Card.Header> {this.props.club.name}</Card.Header>
            <Card.Meta> {this.props.club.type} </Card.Meta>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={this.props.club.rio_website}>
              <Icon name='desktop'/>
            </a>
            <a href={this.props.club.rio_email}>
              <Icon name='envelope outline'/>
            </a>
            <a href={this.props.club.contact_email}>
              <Icon name='address card outline'/>
              {this.props.club.contact_person}
            </a>
            <a href={this.props.club.rio_facebook}>
              <Icon name='facebook f'/>
            </a>
            <a href={this.props.club.rio_instagram}>
              <Icon name='instagram'/>
            </a>
            <a href={this.props.club.rio_twitter}>
              <Icon name='twitter'/>
            </a>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
