/* eslint-disable max-len */
import React from 'react';
import {Grid, Header, Image, Icon, Segment, Form, Message} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


class LandingOne extends React.Component {
    /** Initialize state fields. */
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '' };
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
                // browserHistory.push('/login');
            }
        });
    }

    render() {
        const gridStyle = {
            marginTop: '14px',
        };
        const landingbg = {
            backgroundImage: 'url(/images/bg.png)',
            backgroundSize: 'cover',
            flex: '1',
            paddingBottom: '15px',
        };
        const headerStyle = {
            marginTop: '25px',
            fontWeight: 'bold',
            color: '#ffffff',
        };
        const logoStyle = {
            margin: '0px',
        };
        return (
            <div style={landingbg}>
                <Grid style={gridStyle} columns='equal' className='landingone-background' container centered>
                    <Grid.Row textAlign='center'>
                        <Image style={logoStyle} src='/images/LandingLogo.PNG'/>
                    </Grid.Row>
                    <Grid.Row>
                        <Header inverted style={headerStyle}>Welcome to Clubr, where you can search for the club you
                            desire!</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={headerStyle}>
                                What we can do for you
                                <Header.Subheader style={headerStyle}>
                                    Here at Clubr, we have a directory of registered and unregistered clubs.
                                    As a user, you can find a club that matches your interests and find their contact
                                    information through our club list directory.
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            {this.props.currentUser ? '' :
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
