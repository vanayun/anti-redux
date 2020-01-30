import React, { Component } from 'react';

import Flex from 'styled-flex-component';
import Header from 'components/Header';
import Notification from 'components/Notification';
import Store from 'Store';

export default class AppPresenter extends Component {
  render() {
    return (
      <>
        <Header />
        <Flex alignCenter full column>
          <Store.Consumer>
            {store => {
              return Object.keys(store.notifications).map(key => (
                <Notification
                  key={store.notifications[key].id}
                  id={store.notifications[key].id}
                  text={store.notifications[key].text}
                  seen={store.notifications[key].seen}
                />
              ));
            }}
          </Store.Consumer>
        </Flex>
      </>
    );
  }
}
