import React from "react";

import styles from './index.css';
import Footer from "./footer"
import Header from "./header"
class BasicLayout extends React.Component {
  state = {
    visible: false,
    currentMenu: 'Help'
  };

  handleMenuClick = e => {
    if (e.key.indexOf('#') !== -1) return;
    const page = '/home/' + e.key;
    this.props.history.push(page);
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  goHome = () => {
    this.props.history.push('/');
  }

  login = () => {
    this.props.history.push('/signin');
  }

  render() {
    const { props } = this;
    return (
      <div className={styles.normal}>
        <Header />
        {props.children}
        <Footer />
      </div>
    );
  }
}

export default BasicLayout;
