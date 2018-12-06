import React from 'react';
import { Card, Image, Icon, Grid, Header, Container, Popup, Modal, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubAdmin extends React.Component {
  render() {
    const cardDescStyle = {
      color: 'rgba(0, 0, 0, 0.87)',
      paddingTop: '10px',
      fontWeight: 'normal',
    };
    const descStyle = {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 'normal',
      fontSize: '1.2em',
    };
    const clubCard = { paddingBottom: '0px' };
    const modalButton = { padding: '0px', marginTop: '10px' };
    const modalContent = { padding: '0px' };
    const modalInfo = { padding: '15px 25px 25px 25px' };
    const uhgreen = { color: 'rgb(32,79,50)' };
    const modalHeader = {
      color: 'rgb(32,79,50)',
      padding: '14px 18px 14px 18px',
      fontSize: '1.7em',
    };
    const modalQuestionHeader = {
      color: 'rgba(32,79,50,0.4)',
      marginBottom: '5px',
      fontWeight: 'normal',
      fontSize: '1em',
    };
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
                        style={uhgreen}
                    />
                    <Container textAlign='right'>
                      {this.props.club.rio_website
                          ? <a href={this.props.club.rio_website}>
                            <Icon name='desktop' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_email
                          ? <a href={this.props.club.rio_email}>
                            <Icon name='envelope outline' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.contact_email
                          ? <a href={this.props.club.contact_email} color='grey'>
                            <Popup
                                trigger={<Icon name='address card outline' color='grey'/>}
                                size='tiny'>
                              {this.props.club.contact_person}
                            </Popup>
                          </a>
                          : ''}
                      {this.props.club.rio_facebook
                          ? <a href={this.props.club.rio_facebook}>
                            <Icon name='facebook' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_instagram
                          ? <a href={this.props.club.rio_instagram}>
                            <Icon name='instagram' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_twitter
                          ? <a href={this.props.club.rio_twitter}>
                            <Icon name='twitter' color='grey'/>
                          </a>
                          : ''}
                      <Button basic color='blue'><Link to={`/edit/${this.props.club._id}`}>Edit</Link></Button>
                    </Container>
                  </Grid.Row>
                  <Grid.Row>
                    <div style={cardDescStyle}>
                      {this.props.club.description}
                    </div>
                  </Grid.Row>
                </Grid.Column>
                <Modal
                    size='small'
                    trigger={
                      <Button icon compact fluid attached='bottom' size='mini' style={modalButton}>
                        <Icon name='angle down'/>
                      </Button>
                    }>
                  <Modal.Header style={modalHeader} as='h1'>
                    {this.props.club.name}
                    <Container textAlign='right'>
                      {this.props.club.rio_website
                          ? <a href={this.props.club.rio_website}>
                            <Icon name='desktop' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_email
                          ? <a href={this.props.club.rio_email}>
                            <Icon name='envelope outline' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.contact_email
                          ? <a href={this.props.club.contact_email} color='grey'>
                            <Popup
                                trigger={<Icon name='address card outline' color='grey'/>}
                                size='tiny'>
                              {this.props.club.contact_person}
                            </Popup>
                          </a>
                          : ''}
                      {this.props.club.rio_facebook
                          ? <a href={this.props.club.rio_facebook}>
                            <Icon name='facebook' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_instagram
                          ? <a href={this.props.club.rio_instagram}>
                            <Icon name='instagram' color='grey'/>
                          </a>
                          : ''}
                      {this.props.club.rio_twitter
                          ? <a href={this.props.club.rio_twitter}>
                            <Icon name='twitter' color='grey'/>
                          </a>
                          : ''}
                    </Container>
                  </Modal.Header>
                  <Modal.Content scrolling style={modalContent}>
                    <Image src={this.props.club.image} fluid/>
                    <Modal.Description style={modalInfo}>
                      <Header style={modalQuestionHeader} as='h5'>We are...</Header>
                      <p style={descStyle}>
                        {this.props.club.description}
                      </p>
                    </Modal.Description>
                    {this.props.club.addedQuestion1
                        ? <Modal.Description style={modalInfo}>
                          <Header style={modalQuestionHeader}>{this.props.club.addedQuestion1}</Header>
                          <p style={descStyle}>
                            {this.props.club.addedAnswer1}
                          </p>
                        </Modal.Description>
                        : ''}
                    {this.props.club.image2
                        ? <Image src={this.props.club.image2} fluid/>
                        : ''}
                    {this.props.club.addedQuestion2
                        ? <Modal.Description style={modalInfo}>
                          <Header style={modalQuestionHeader}>{this.props.club.addedQuestion2}</Header>
                          <p style={descStyle}>
                            {this.props.club.addedAnswer2}
                          </p>
                        </Modal.Description>
                        : ''}
                    {this.props.club.image3
                        ? <Image src={this.props.club.image3} fluid/>
                        : ''}
                    {this.props.club.addedQuestion3
                        ? <Modal.Description style={modalInfo}>
                          <Header style={modalQuestionHeader}>{this.props.club.addedQuestion3}</Header>
                          <p style={descStyle}>
                            {this.props.club.addedAnswer3}
                          </p>
                        </Modal.Description>
                        : ''}
                    <Modal.Description style={modalInfo}>
                      <Header style={modalQuestionHeader}>Meet us!</Header>
                      <p style={descStyle}>
                        {this.props.club.meetingTimesInfo}
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
ClubAdmin.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubAdmin);
