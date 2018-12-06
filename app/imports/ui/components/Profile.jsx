import React from 'react';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {

  render() {
    return (
        <Container>
          <Header as='h1'>Welcome, {this.props.profile.name}!</Header>
          <Segment>
            <Image size='small' circular floated='left' src={this.props.profile.image}/>
            <Header as='h3'>Clubs I'm interested in: {this.props.profile.interest}</Header>
            <Header as='h3'>My Major is: {this.props.profile.major}</Header>
            <Header as='h3'>Email Address: {this.props.profile.email}</Header>
            <Header as='h3'>Bio: {this.props.profile.bio}</Header>
            <Header as='h3'><Link to={`/editprofile/${this.props.profile._id}`}>Edit</Link></Header>
          </Segment>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
