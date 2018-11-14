/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      marginBottom: '0px',
      backgroundColor: 'black',
      padding: '0px',
      fontSize: '20px',
      fontFamily: 'Helvetica',
      marginLeft: '0px',
    };
    const itemStyle = {
      padding: '5px',
      margin: '10px',
    };
    const logoStyle = {
      marginRight: '30px',
    };
    const iconMargin = {
      margin: '2px',
    };

    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item style={logoStyle} as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>LOGO HERE</Header>
          </Menu.Item>
          {/* Checks if user is admin, if not keeps user menu */}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Club</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>]
          ) : ''}
          {/* Checks if user is logged in to display user options */}
          {this.props.currentUser ? (
              [<Menu.Item as={NavLink} position="right" activeClassName="active" exact to="/list"
                 key='list'>List Clubs</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/clubadminlist"
                         key='clubadminlist'>List My Clubs</Menu.Item>]
          ) : ''}
          {/* Sign in if not signed in */}
          <Menu.Item style={itemStyle}>
            {this.props.currentUser === '' ? (
                <Dropdown style={iconMargin} text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
