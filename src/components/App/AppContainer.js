import React, { Component } from 'react';

import AppPresenter from './AppPresenter';
import Store from 'Store';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.seeNotification = id => {
      this.setState(currState => {
        currState.notifications[id].seen = true;
        return currState;
      });
    };
    this.deleteNotification = id => {
      this.setState(currState => {
        delete currState.notifications[id];
        return currState;
      });
    };

    this.state = {
      seeNotification: this.seeNotification,
      deleteNotification: this.deleteNotification,
      notifications: {
        '1': {
          id: 1,
          text: 'something 1!',
          seen: false
        },
        '2': {
          id: 2,
          text: 'something 2!',
          seen: false
        },
        '3': {
          id: 3,
          text: 'something 3!',
          seen: false
        }
      }
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter></AppPresenter>
      </Store.Provider>
    );
  }
}
