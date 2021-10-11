import React, { useCallback } from 'react';
import { history } from 'umi';
import {
  Drawer,
  Card,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

interface PayModalProps {
  showPay: boolean;
  onOpenChange: () => void;
}

const PayModal: React.FC<PayModalProps> = ({ showPay, onOpenChange }) => {
  const pay = useCallback(() => {
    //mock payment
    setTimeout(() => {
      Toast.success('Payment Success!', 2);
      onOpenChange();
      setTimeout(() => {
        history.push('/orderList');
      }, 2000);
    }, 1000);
  }, []);

  const sidebar = (
    <Card>
      <Card.Header title="Payment Detail" />
      <Card.Body>
        <InputItem type="phone" placeholder="Please enter phone number" clear />
        <div className={classnames(styles.auth, 'xyCenter')}>
          <InputItem
            type="number"
            maxLength={6}
            placeholder="Please enter 6 digit otp"
            clear
          />
          <Button className={styles.authBtn}>Send OTP</Button>
        </div>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={pay}>
          Pay
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <Drawer
      className={styles.main}
      position="bottom"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{
        color: '#A6A6A6',
        textAlign: 'center',
        paddingTop: 42,
      }}
      sidebar={sidebar}
      open={showPay}
      onOpenChange={onOpenChange}
      children={<div></div>}
    ></Drawer>
  );
};

export default PayModal;
