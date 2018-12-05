import React from 'react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Button, Grid, Header, Segment, Step } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddClub2 extends React.Component {

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
    const { name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, image2, image3, description, addedQuestion1, addedAnswer1, addedQuestion2,
      addedAnswer2, addedQuestion3, addedAnswer3, meetingTimesInfo } = data;
    const owner = Meteor.user().username;
    Clubs.insert({ name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, image2, image3, description, addedQuestion1, addedAnswer1, addedQuestion2,
      addedAnswer2, addedQuestion3, addedAnswer3, meetingTimesInfo, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const stepStyle = {
      paddingTop: '30px',
      marginLeft: '200px',
      marginBottom: '20px',
    };
    return (
        <div className='landing-background'>
          <div style={stepStyle}>
            <Step.Group ordered centered>
              <Step completed>
                <Step.Content>
                  <Step.Title>Add Basic Info</Step.Title>
                  <Step.Description>Add the necessary information about the club.</Step.Description>
                </Step.Content>
              </Step>

              <Step active>
                <Step.Content>
                  <Step.Title>Add More Info</Step.Title>
                  <Step.Description>Add more exciting information about the club.</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </div>
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" className='header-style'>Add Club</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ClubSchema}>
              <Segment>
                <SelectField name='addedQuestion1'/>
                <TextField name='addedAnswer1'/>
                <SelectField name='addedQuestion2'/>
                <TextField name='addedAnswer2'/>
                <SelectField name='addedQuestion3'/>
                <TextField name='addedAnswer3'/>
                <TextField name='meetingTimesInfo'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
                <Button onSubmit={this.submit}>Submit</Button>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

  export default AddClub2;
