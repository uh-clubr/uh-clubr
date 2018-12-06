import React from 'react';
import { Profiles, ProfileSchema } from '/imports/api/profile/profile';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import HiddenField from 'uniforms-semantic/HiddenField';
import SelectField from 'uniforms-semantic/SelectField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SubmitField from 'uniforms-semantic/SubmitField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddProfile extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, interest, major, email, bio, image } = data;
    const owner = Meteor.user().username;
    Profiles.insert({ name, interest, major, email, bio, image, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div className='landing-background'>
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" className='header-style'>Create Your Profile!</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ProfileSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='name'/>
                <SelectField name='interest'/>
                <TextField name='major'/>
                <TextField name='email'/>
                <LongTextField name='bio'/>
                <TextField name='image'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

  export default AddProfile;
