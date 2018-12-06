import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div className='footer-background'>
          <footer>
            <Grid container textAlign="center" verticalAlign="middle" centered>
              <Grid.Row>
                <div className='footer-contact-style'>
                  <Grid.Column textAlign='center'>
                    Contact Us
                    <hr/>
                    Phone : (808) 956-8111 <br/>
                    Email : manoaweb@hawaii.edu
                  </Grid.Column>
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
        </div>
    );
  }
}

export default Footer;
