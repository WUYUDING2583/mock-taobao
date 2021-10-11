import { WhiteSpace, WingBlank } from 'antd-mobile';
import { Component } from 'react';
import { queryOrderList } from '@/services/orderList';
import styles from './index.less';
import { CartProductType } from '@/@types/product';
import List from "./List";

interface OrderListProps {
}

interface OrderListState {
  data: CartProductType[];
};

class OrderList extends Component<OrderListProps, OrderListState>{
  state: OrderListState = {
    data: [],
  };

  componentDidMount() {
    queryOrderList().then(res => {
      this.setState({ data: res.list.data });
    });
  }

  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <List data={this.state.data} />
      </WingBlank>
    )
  }
}

export default OrderList;