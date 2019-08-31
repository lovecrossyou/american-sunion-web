import { Progress, Button } from 'antd'
import styles from "./overall.css"
function Overall() {
  return <div className={styles.main}>
    <div className={styles.flexrow}>
      <div className={styles.balance_wrapper}>
        <div className={styles.balance_title}>BALANCE</div>
        <div className={styles.balance_amount}>$3,215.00</div>
      </div>
      <div className={styles.credit_wrapper}>
        <div className={styles.credit_limit}>CREDIT LIMIT</div>
        <div className={styles.credit_amount}>$10,000.00</div>
        <div className={styles.credit_progress}>
          <Progress percent={50} showInfo={false} />
        </div>
        <div className={styles.credit_footer}>
          <div>
            <div className={styles.credit_title}>BALANCE</div>
            <div className={styles.credit_amount}>$3215.00</div>
          </div>
          <div>
            <div className={styles.credit_title}>AVAILABLE</div>
            <div className={styles.credit_amount}>$6785.00</div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.flexrow}>

      <div className={styles.payment}>
        <div className={styles.balance_title}>YOUR PAYMENT</div>
        <div className={styles.payment_frequency}>Payment Frequency</div>
        <div className={styles.payment_monthly}>Monthly</div>
        <div className={styles.payment_frequency}>Payment History</div>
        <div className={styles.payment_monthly}>Last payment was for </div>
        <div style={{ marginTop: '2rem' }}><Button type="primary">MAKE PAYMENT</Button> </div>
      </div>

      <div className={styles.payment} style={{marginLeft:'2rem'}}>
        <div className={styles.balance_title}>YOUR REWARD</div>
        <div className={styles.payment_frequency}>Total Rewards</div>
        <div className={styles.reward_amount}>666</div>
        <div className={styles.payment_monthly}>Your points can be redeemed as early as 03</div>
        <div style={{ marginTop: '2rem' }}><Button type="primary">OPTION</Button> </div>
      </div>
    </div>
  </div>
}



export default Overall;