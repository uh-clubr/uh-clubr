import React from 'react';
import { Card, Image, Icon, Header, Grid, Container, Modal, Button, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  render() {
    const cardDescStyle = { color: 'rgba(0, 0, 0, 0.87)', paddingTop: '10px' };
    const descStyle = { color: 'rgba(0, 0, 0, 0.87)' };
    const clubCard = { paddingBottom: '0px' };
    const modalButton = { padding: '0px', marginTop: '10px' };
    const modalContent = { padding: '0px' };
    const modalInfo = { padding: '14px' };
    return (
        <Card fluid>
          <Card.Content floated='left'>
            <Grid stackable columns={2}>
              <Grid.Row style={clubCard}>
                      <Grid.Column width={5}>
                        <Image floated='left' rounded size='large' src={this.props.club.image}/>
                      </Grid.Column>
                      <Grid.Column width={11} stretched>
                        <Grid.Row>
                          <Header
                        as='h2'
                        floated='left'
                        content={this.props.club.name}
                        subheader={this.props.club.type}
                    />
                    <Container textAlign='right'>
                      <a href={this.props.club.rio_website}>
                        <Icon name='desktop' color='grey'/>
                      </a>
                      <a href={this.props.club.rio_email}>
                        <Icon name='envelope outline' color='grey'/>
                      </a>
                      <a href={this.props.club.contact_email} color='grey'>
                        <Popup
                            trigger={<Icon name='address card outline' color='grey'/>}
                            size='tiny'>
                          {this.props.club.contact_person}
                        </Popup>
                      </a>
                      <a href={this.props.club.rio_facebook}>
                        <Icon name='facebook' color='grey'/>
                      </a>
                      <a href={this.props.club.rio_instagram}>
                        <Icon name='instagram' color='grey'/>
                      </a>
                      <a href={this.props.club.rio_twitter}>
                        <Icon name='twitter' color='grey'/>
                      </a>
                    </Container>
                  </Grid.Row>
                  <Grid.Row>
                    <div style={cardDescStyle}>
                      {this.props.club.description}
                    </div>
                  </Grid.Row>
                </Grid.Column>
                <Modal trigger={
                  <Button icon compact fluid attached='bottom' size='mini' style={modalButton}>
                    <Icon name='angle down'/>
                  </Button>
                }>
                  <Modal.Header>{this.props.club.name}</Modal.Header>
                  <Modal.Content scrolling style={modalContent}>
                    <Image src={this.props.club.image} fluid/>
                    <Modal.Description style={modalInfo}>
                      <Header>We are...</Header>
                      <p style={descStyle}>
                        {this.props.club.description}
                      </p>
                    </Modal.Description>
                    <Image src={this.props.club.image} fluid/>
                    <Modal.Description style={modalInfo}>
                      <Header>We would get along if you...</Header>
                      <p style={descStyle}>
                        ANSWER HERE
                      </p>
                    </Modal.Description>
                    <Image src={this.props.club.image} fluid/>
                    <Modal.Description style={modalInfo}>
                      <Header>Meet us!</Header>
                      <p style={descStyle}>
                        Example:
                        M 3:30-4:00
                        T 4:30-5:00
                      </p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
