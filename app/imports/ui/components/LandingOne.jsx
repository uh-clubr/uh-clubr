/* eslint-disable max-len */
import React from 'react';
import {Grid, Header, Image, Icon} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

class LandingOne extends React.Component {
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
        }
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
                            {this.props.currentUser ? (
                                <Header >
                                    IF USER IS SIGNED IN
                                    What content to put here?
                                </Header>
                            ) : <Header style={headerStyle}>
                                <Icon fitted inverted name='user circle outline'/>
                                SIGN UP!
                                <Header.Subheader style={headerStyle}>Join now and find to right club meant for you!</Header.Subheader>
                            </Header>}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
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
