import React from "react";
import router from 'umi/router';
import styles from './index.css';
import Footer from "./footer"
import Header from "./header"
import AuthHeader from "./authheader"

import { Tabs } from 'antd';

const { TabPane } = Tabs;
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
          <div className={styles.auth_normal}>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="Overvall" key="overall">
                Content of Overvall
          </TabPane>
              <TabPane tab="Budget" key="budget">
                Content of Budget
          </TabPane>
              <TabPane tab="Transaction" key="transaction">
                Content of Transaction
          </TabPane>
              <TabPane tab="Wallet" key="wallet">
                Content of Wallet
          </TabPane>
              <TabPane tab="Person" key="person">
                Content of Person
          </TabPane>
              <TabPane tab="Help" key="help">
                Content of Help
          </TabPane>
            </Tabs>
          </div>
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
