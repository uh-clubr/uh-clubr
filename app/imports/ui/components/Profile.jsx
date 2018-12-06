import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {

  render() {
    return (
        <Card centered>
          <Image src={this.props.profile.image}/>
          <Card.Content>
            <Card.Header>Name: {this.props.profile.name}</Card.Header>
            <Card.Meta>Email: {this.props.profile.email}</Card.Meta>
            <Card.Meta>Interest: {this.props.profile.interest}</Card.Meta>
            <Card.Meta>Major: {this.props.profile.major}</Card.Meta>
            <Card.Description>
              Bio: {this.props.profile.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta>Don&apos;t like what you see? Click below to edit your profile:</Card.Meta>
            <Button basic color='blue'><Link to={`/editprofile/${this.props.profile._id}`}>Edit</Link></Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
