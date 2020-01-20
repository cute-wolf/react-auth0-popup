import React, { Component } from 'react';
import salesforceAuth from '../auth/salesforce/service';

class Salesforce extends Component {
  constructor(props) {
    super(props);

    salesforceAuth.loginCallback = this.loggedIn.bind(this);
    salesforceAuth.logoutCallback = this.loggedOut.bind(this);

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
          <button onClick={() => salesforceAuth.logout()} className="log-in">
            Log Out Salesforce
          </button>
        ) : (
          <button onClick={() => salesforceAuth.login()} className="log-in">
            Log In Salesforce
          </button>
        )}
        {this.state.loggedIn ? (
          <h1>Salesforce Logged in</h1>
        ) : (
          <h1>Gmail logged in</h1>
        )}
      </div>
    );
  }
}

export default Salesforce;
