import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  tick() {
    this.setState({ count: (this.state.count + 1) });
  }

  componentWillMount() {
    this.timer = setInterval(this.tick.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    Meteor.logout();
    if (this.state.count > 2) {
      return <Redirect to='/'/>;
    }
    return (
        <Header className='timer' as="h2" textAlign="center">
          <p>You are signed out.</p>
        </Header>
    );
  }
}
