import React from 'react';
import LandingOne from '../components/LandingOne';
import { Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid>
            <LandingOne/>
        </Grid>
    );
  }
}

export default Landing;
