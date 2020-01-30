import React, { Component } from 'react';

import HeaderPresenter from './HeaderPresenter';

export default class HeaderContainer extends Component {
  render() {
    return <HeaderPresenter {...this.state}></HeaderPresenter>;
  }
}
