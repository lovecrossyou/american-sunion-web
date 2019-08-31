import React from "react";

import styles from './index.css';
import { Tabs } from 'antd';
import Overall from "./admin/overall"
import Tranasaction from "./admin/transaction"
import Budget from "./admin/budget"
import Wallet from "./admin/wallet"
import Person from "./admin/person"
import Help from "./admin/help"

const { TabPane } = Tabs;

const callback = () => {

}
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.auth_normal}>
        <Tabs defaultActiveKey="overall" onChange={callback}>
          <TabPane tab="Overall" key="overall">
            <Overall />
          </TabPane>
          <TabPane tab="Budget" key="budget">
            <Budget/>
          </TabPane>
          <TabPane tab="Transaction" key="transaction">
            <Tranasaction/>
          </TabPane>
          <TabPane tab="Wallet" key="wallet">
            <Wallet/>
          </TabPane>
          <TabPane tab="Person" key="person">
            <Person/>
          </TabPane>
          <TabPane tab="Help" key="help">
            <Help/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
} 
