/* eslint-disable max-len */
import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';

export default class LandingOne extends React.Component {
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
                        Content
                    </Grid.Row>
                    <Grid.Row>
                        Content
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
