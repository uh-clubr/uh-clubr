import React from 'react';
import { Card, Image, Icon, Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  render() {
    return (
      <Card fluid>
          <Card.Content floated='left'>
            <Image floated='left' rounded size='medium' src={this.props.club.image} />
            <Container>
              <Header
                  as='h2'
                  content={this.props.club.name}
                  subheader={this.props.club.type}
              />
            </Container>
            <Card.Description>{this.props.club.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={this.props.club.rio_website}>
              <Icon name='desktop' />
            </a>
            <a href={this.props.club.rio_email}>
            <Icon name='envelope outline' />
          </a>
            <a href={this.props.club.contact_email}>
              <Icon name='address card outline' />
              {this.props.club.contact_person}
            </a>
            <a href={this.props.club.rio_facebook}>
              <Icon name='facebook f' />
            </a>
            <a href={this.props.club.rio_instagram}>
              <Icon name='instagram' />
            </a>
            <a href={this.props.club.rio_twitter}>
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
