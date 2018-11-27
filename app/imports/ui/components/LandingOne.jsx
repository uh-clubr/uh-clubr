/* eslint-disable max-len */
import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';

export default class LandingOne extends React.Component {
    render() {
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
                      <div className='landing-header-style'>
                        <Header inverted>Welcome to Clubr, where you can search for the club you
                            desire!</Header>
                      </div>
                    </Grid.Row>
                    <Grid.Row>
                        Content
                    </Grid.Row>
                    <Grid.Row>
                        Content
                    </Grid.Row>
                </Grid>
              </div>
            </div>
        );
    }
}
