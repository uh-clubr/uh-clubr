/* eslint-disable max-len */
import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class LandingOne extends React.Component {
    render() {
        const gridStyle = {
            marginTop: '15px',
        };
        const headerStyle = {
            marginTop: '25px',
            fontWeight: 'bold',
        };

        return (

            <Grid style={gridStyle} columns='equal' className='landingone-background' container centered>
                <Grid.Column textAlign='center'>
                    <Header style={headerStyle} as='h1'>CLUBR</Header>
                    <div className='text' >
                        Finding you the right club to your taste!
                    </div>
                </Grid.Column>
                <Grid.Row>
                    <Header style={headerStyle}>What we are about...</Header>
                </Grid.Row>
                <Grid.Row>
                    Content
                </Grid.Row>
                <Grid.Row>
                    Content
                </Grid.Row>
            </Grid>
        );
    }
}
