import React from "react";

import styles from './index.css';
import { Menu, Dropdown, Icon } from 'antd';
import home_logo from "../assets/home_logo.png"

class Header extends React.Component {
  state = {
    visible: false,
    currentMenu: 'Help'
  };

  handleMenuClick = e => {
    if (e.key.indexOf('#') !== -1) return;
    const page = '/home/' + e.key;
    this.props.history.push(page);
    console.log('page # ', e.key);
    // this.setState({ visible: false, currentMenu: e.key || 'Help' });
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
    return (
      <div className={styles.normal}>
        <div className={styles.darkBg}>
          <div className={styles.home_nav_left} onClick={this.goHome}>
            <img className={styles.logo} src={home_logo} alt="" />
            <button style={{ backgroundColor: '#00000000', color: '#ffffff', fontSize: '30px' }} onClick={this.goHome} className="a-logo-title">American Sunion</button>
          </div>
          <div className={styles.home_nav_right_auth}>
            <div className={styles.user_wrapper}>
              <img className={styles.user_logo} alt="" />
              <div className={styles.username}>Welcome Terry</div>
            </div>
            <div className={styles.nav_menu}>Setting</div>
            <div className={styles.nav_menu}>Profile</div>

            <div className={styles.nav_menu}>Log out</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
