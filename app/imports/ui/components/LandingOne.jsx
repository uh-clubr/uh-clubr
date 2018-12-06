/* eslint-disable max-len */
import React from 'react';
import { Grid, Header, Image, Icon, Segment, Form, Message, Checkbox } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class LandingOne extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', signed: false };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ signed: true });
      }
    });
  }

  render() {
    // if correct authentication, redirect to page instead of login screen
    return (
        <div className='landing-background'>
          <div className='landing-grid-style'>
            <Grid columns='equal' className='landingone-background' container centered>
              <Grid.Row textAlign='center'>
                <div className='landing-logo-style'>
                  <Image src='/images/LandingLogo.PNG'/>
                </div>
              </Grid.Row>
              <Grid.Row>
                <Header className='landing-header-style'>
                  Swipe through the clubs at UH Manoa and find your match!
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Header className='landing-header-styletwo'>
                      Welcome to the Clubr!
                      <hr/>
                      <Header.Subheader className='landing-header-styletwo'>
                        Just like Tinder, swipe through our complete list of clubs at the University of Hawaii at Manoa.
                        Get to know the different clubs on campus and find your people at UH.
                      </Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                  {(this.state.signed) || (this.props.currentUser) ?
                      <Header>
                        <Header.Subheader className='landing-quote'>"Finding a club was so easy!"</Header.Subheader>
                        <Header.Subheader className='landing-quotetwo'>-Justin Enoki</Header.Subheader>
                        <hr/>
                        <Header.Subheader className='landing-quote'>"Very professional and conveys information clearly."</Header.Subheader>
                        <Header.Subheader className='landing-quotetwo'>-Taylor Hall</Header.Subheader>
                      </Header>
                      :
                      <Segment>
                        <Header>
                          <Icon fitted name='user circle outline'/>
                          SIGN UP!
                          <Header.Subheader>Join now and find to right club meant for
                            you!</Header.Subheader>
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                          <Segment stacked>
                            <Form.Input
                                label="Email"
                                icon="user"
                                iconPosition="left"
                                name="email"
                                type="email"
                                placeholder="E-mail address"
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="Password"
                                icon="lock"
                                iconPosition="left"
                                name="password"
                                placeholder="Password"
                                type="password"
                                onChange={this.handleChange}
                            />
                            <Form.Button content="Submit"/>
                            <Form.Field>
                              <Checkbox label='Email me when new clubs get added' />
                            </Form.Field>
                          </Segment>
                        </Form>
                        {this.state.error === '' ? (
                            ''
                        ) : (
                            <Message
                                error
                                header="Registration was not successful"
                                content={this.state.error}
                            />
                        )}
                      </Segment>}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              </Grid.Row>
              <Grid.Row>
              </Grid.Row>
            </Grid>
          </div>
        </div>
  );
}
}

/** Declare the types of all properties. */
LandingOne.propTypes = {
  currentUser: PropTypes.string,

};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const LandingOneContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(LandingOne);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(LandingOneContainer);
