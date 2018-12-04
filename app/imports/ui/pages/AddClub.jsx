import React from 'react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Grid, Header, Segment, Step, Button } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

/** Renders the Page for adding a document. */
class AddClub extends React.Component {

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
      rio_twitter, image, description } = data;
    const owner = Meteor.user().username;
    Clubs.insert({ name, type, contact_person, contact_email, rio_email, rio_website, rio_facebook, rio_instagram,
      rio_twitter, image, description, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const stepStyle = {
      marginTop: '20px',
      marginLeft: '200px',
      marginBottom: '20px',
    };
    return (
<<<<<<< HEAD
        <div className='add-club'>
          <div style={stepStyle}>
            <Step.Group ordered>
              <Step active>
                <Step.Content>
                  <Step.Title>Add Basic Info</Step.Title>
                  <Step.Description>Add the necessary information about the club.</Step.Description>
                </Step.Content>
              </Step>

              <Step disabled>
                <Step.Content>
                  <Step.Title>Add More Info</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </div>
=======
        <div className='landing-background'>
>>>>>>> dev
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" className='header-style'>Add Club</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ClubSchema} onSubmit={this.submit}>
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
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
                <Button><Link to={'/addclub2'}>Next</Link></Button>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

  export default AddClub;
