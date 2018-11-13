import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footerBackground = {
      backgroundColor: '#000000',
      marginTop: '15px',
    };
    const contactStyle = {
      color: '#ffffff',
    };
    return (
        <footer style={footerBackground}>
          <Grid textAlign="center" verticalAlign="middle" centered>
            <Grid.Row>

              <div style={contactStyle} >
                Contact Us
                <hr/>
                Phone : (808) 956-8111 <br/>
                Email : manoaweb@hawaii.edu
              </div>
            </Grid.Row>
            <Grid.Row centered>
              <a href="https://www.facebook.com/uhmanoa/">
                <Button circular icon='facebook' size='large' color='facebook'/>
              </a>
              <a href="https://twitter.com/uhmanoa">
                <Button circular icon='twitter' size='large' color='twitter' margin-right='15px'/>
              </a>
              <a href="https://www.instagram.com/uhmanoanews/">
                <Button circular icon='instagram' size='large' color='instagram'/>
              </a>
            </Grid.Row>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
