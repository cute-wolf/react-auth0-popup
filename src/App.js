import React, { Component, Fragment } from 'react';
import TvShows from './components/TvShows.js';
import Movies from './components/Movies.js';
import Salesforce from './components/Salesforce.js';
import gmailAuth from './auth/gmail/service';

class App extends Component {
  constructor(props) {
    super(props);

    gmailAuth.loginCallback = this.loggedIn.bind(this);
    gmailAuth.logoutCallback = this.loggedOut.bind(this);

    this.state = { loggedIn: false };
  }

  loggedIn() {
    this.setState({ loggedIn: true });
  }

  loggedOut() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <Fragment>
            <Salesforce />
            <button onClick={() => gmailAuth.logout()} className="log-in">
              Log Out Gmail
            </button>
          </Fragment>
        ) : (
          <button onClick={() => gmailAuth.login()} className="log-in">
            Log In Gmail
          </button>
        )}
      </div>
    );
  }
}

export default App;
