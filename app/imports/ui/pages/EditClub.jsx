import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import SelectField from 'uniforms-semantic/SelectField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class EditClub extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, description, image2, image3, addedQuestion1, addedAnswer1, addedQuestion2, addedAnswer2,
      addedQuestion3, addedAnswer3, meetingTimesInfo, _id } = data;
    Clubs.update(_id, { $set: { name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook,
        rio_instagram, rio_twitter, image, description, image2, image3, addedQuestion1, addedAnswer1, addedQuestion2,
        addedAnswer2, addedQuestion3, addedAnswer3, meetingTimesInfo } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <div className='landing-background'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" className='header-style'>Edit Your Club!</Header>
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
                  <TextField name='image2'/>
                  <TextField name='image3'/>
                  <LongTextField name='description'/>
                  <SelectField name='addedQuestion1'/>
                  <TextField name='addedAnswer1'/>
                  <SelectField name='addedQuestion2'/>
                  <TextField name='addedAnswer2'/>
                  <SelectField name='addedQuestion3'/>
                  <TextField name='addedAnswer3'/>
                  <TextField name='meetingTimesInfo'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' />
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
})(EditClub);
