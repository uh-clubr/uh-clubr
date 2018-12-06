/* eslint-disable max-len */
import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class EditClub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '', type: '', contact_person: '', contact_email: '', rio_email: '', rio_website: '', rio_facebook: '', rio_instagram: '',
      rio_twitter: '', image: '', description: '', _id: '', success: false, count: 0,
    };
    this.insertCallBack = this.insertCallBack.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  tick() {
    this.setState({ count: (this.state.count + 1) });
  }

  timeOut() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallBack(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
      this.props.history.push('/user');
      this.timeOut();
    }
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });

  }

  /** On successful submit, insert the data. */
  submit() {
    const {
      name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, description, _id,
    } = this.state;
    Clubs.update(_id, { name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, description,
    }, this.insertCallBack);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    if (this.state.count > 1) {
      return <Redirect to='/user'/>;
    }
    return (
        <div className='landing-background'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" className='header-style'>Edit Club</Header>
              <AutoForm schema={ClubSchema} onSubmit={this.submit} model={this.props.doc}>
                <Segment>
                  <TextField name='name'/>
                  <TextField name='type'/>
                  <TextField name='contact_person'/>
                  <TextField name='contact_email'/>
                  <TextField name='rio_email'/>
                  <TextField name='rio_website'/>
                  <TextField name='rio_facebook'/>
                  <TextField name='rio_instagram'/>
                  <TextField name='rio_twitter'/>
                  <TextField name='image'/>
                  <LongTextField name='description'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditClub.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    doc: Clubs.findOne(documentId),
    ready: subscription.ready(),
  };
})(withRouter(EditClub));
