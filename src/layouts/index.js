import React from "react";
import router from 'umi/router';
import styles from './index.css';
import Footer from "./footer"
import Header from "./header"
import AuthHeader from "./authheader"


class BasicLayout extends React.Component {
  state = {
    visible: false,
    currentMenu: 'Help'
  };

  render() {
    const { props } = this;
    const hasLogin = true;
    if (hasLogin) {
      return (
        <div className={styles.normal}>
          <AuthHeader />
          {props.children}
          <Footer />
        </div>
      )
    }
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
