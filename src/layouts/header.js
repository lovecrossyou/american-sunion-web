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
    const HowItWorksMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="budget">Budget</Menu.Item>
        <Menu.Item key="credit">Credit</Menu.Item>
        <Menu.Item key="expenses">Expenses</Menu.Item>
        <Menu.Item key="people">People & Team</Menu.Item>
        <Menu.Item key="project">Project</Menu.Item>
        <Menu.Item key="vcard">Virtual Card</Menu.Item>
        <Menu.Item key="rewards">Rewards</Menu.Item>
      </Menu>
    );
    const AboutMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="#company">Company</Menu.Item>
        <Menu.Item key="#blog">Blog</Menu.Item>
        <Menu.Item key="security">Security</Menu.Item>
        <Menu.Item key="#careers">Careers</Menu.Item>
        <Menu.Item key="#media">Media</Menu.Item>
        <Menu.Item key="#cooperation">Cooperation</Menu.Item>
      </Menu>
    );

    const HelpMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="#faqs">FAQs</Menu.Item>
        <Menu.Item key="#search">Search</Menu.Item>
        <Menu.Item key="contactus">Contact Us</Menu.Item>
      </Menu>
    );

    let helpCls = 'help-white';
    let homeNavCls = 'home-nav-container darkBg';
    if (this.props.clearBg) {
      homeNavCls = 'home-nav-container';
      helpCls = 'help-blue';
    }
    return (
      <div className={styles.normal}>
        <div className={styles.darkBg}>
          <div className={styles.home_nav_left} onClick={this.goHome}>
            <img className={styles.logo} src={home_logo} alt="" />
            <button style={{ backgroundColor: '#00000000', color: '#ffffff', fontSize: '30px' }} onClick={this.goHome} className="a-logo-title">American Sunion</button>
          </div>
          <div className={styles.home_nav_right}>
            <Dropdown
              overlay={HowItWorksMenu}
              onVisibleChange={this.handleVisibleChange}
            >
              <button className={styles.help_white} style={{ backgroundColor: 'transparent' }} >
                How it works<Icon type="down" />
              </button>
            </Dropdown>
            <div className={styles.nav_menu}>Pricing</div>
            <Dropdown
              overlay={AboutMenu}
              onVisibleChange={this.handleVisibleChange}
            >
              <button className='help-white' style={{ backgroundColor: 'transparent' }} >
                About<Icon type="down" />
              </button>
            </Dropdown>
            <Dropdown
              overlay={HelpMenu}
              onVisibleChange={this.handleVisibleChange}
            >
              <button className='help-white' style={{ backgroundColor: 'transparent' }} >
                Help<Icon type="down" />
              </button>
            </Dropdown>
            <div className={helpCls} onClick={this.login.bind(this)}>Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
