import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.club.image} />
            <Card.Header> {this.props.club.name}</Card.Header>
            <Card.Meta> {this.props.club.type} </Card.Meta>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={this.props.club.riowebsite}>
              <Icon name='desktop' />
            </a>
            <a href={this.props.club.rioemail}>
            <Icon name='envelope outline' />
          </a>
            <a href={this.props.club.contactemail}>
              <Icon name='address card outline' />
              {this.props.club.contactperson}
            </a>
            <a href={this.props.club.riofacebook}>
              <Icon name='facebook f' />
            </a>
            <a href={this.props.club.rioinstagram}>
              <Icon name='instagram' />
            </a>
            <a href={this.props.club.riotwitter}>
              <Icon name='twitter' />
            </a>
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
