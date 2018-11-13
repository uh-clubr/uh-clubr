import React from 'react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { Grid, Form, Header, Button } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

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
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Club</Header>
            <Form>
              <Form.Field required>
                <label>Club Name</label>
                <input placeholder='Club Name'/>
              </Form.Field>
              <Form.Field required>
                <label>Club Type</label>
                <input placeholder='Club Type (ex.Academic, Ethical, etc.)'/>
              </Form.Field>
              <Form.Field required>
                <label>Club Officer</label>
                <input placeholder='Club officer (ex.President, Vice president, etc.)'/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
    );
  }
}

  export default AddClub;
