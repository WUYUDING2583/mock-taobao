import { Component } from 'react';
import styles from './index.less';
import { getDefaultReceivingInfo } from "@/services/confirmBill";
import ReceivingInfo, { ReceivingInfoType } from './ReceivingInfo';
import { Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect, history } from 'umi';
import ListNode from "./ListNode";
import { ConnectProps, ConnectState } from "@/models/connect";
import { CartModelState } from "@/models/cart";
import PayBar from './PayBar';

interface ConfirmBillProps extends ConnectProps {
  cart: CartModelState;
}

interface ConfirmBillState {
  receivingInfo: ReceivingInfoType;
};

class ConfirmBill extends Component<ConfirmBillProps, ConfirmBillState>{
  state: ConfirmBillState = {
    receivingInfo: {
      name: "",
      tel: "",
      address: "",
    }
  };

  componentDidMount() {
    const { data } = this.props.cart;
    if (data.length === 0) {
      Toast.info("Please reentry confirm bill page.");
      history.goBack();
    } else {
      getDefaultReceivingInfo().then(res => {
        this.setState({ receivingInfo: { ...res } });
      })
    }
  }

  render() {
    const { receivingInfo } = this.state;
    const { cart } = this.props;
    const { data } = cart;
    let totalPrice = 0, itemCount = 0;
    const getList = data.map(item => {
      if (item.checked) {
        totalPrice += item.price * item.count;
        itemCount += item.count;
      }
      return <ListNode key={item.id} {...item} />
    })

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <ReceivingInfo {...receivingInfo} />
        <WhiteSpace size="lg" />
        <div>{getList}</div>
        <PayBar totalPrice={totalPrice} count={itemCount} />
      </WingBlank>
    )
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(ConfirmBill);