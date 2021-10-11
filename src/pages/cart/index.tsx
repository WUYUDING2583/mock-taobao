import { CartProductType } from '@/@types/product';
import { queryCart } from '@/services/cart';
import { Component } from 'react';
import List, { UpdateProductType } from "./List";
import styles from './index.less';
import PayBar from './PayBar';
import { connect, history } from 'umi';
import { ConnectProps, ConnectState } from "@/models/connect";
import { editCart } from "@/services/editCart";

interface CartState {
  data: CartProductType[];
};

class Cart extends Component<ConnectProps, CartState>{
  state: CartState = {
    data: [],
  };

  componentDidMount() {
    queryCart().then(res => {
      this.setState({ data: res.list.data });
    })
  }

  updateProduct = (newState: UpdateProductType) => {
    const { id, index, count, checked } = newState;
    let data = [...this.state.data];
    if (count == 0) {
      data.splice(index, 1);
    } else {
      Object.assign(data[index], newState);
    }
    editCart({ id, count }).then(res => {
      this.setState({ data });
    });

  }

  checkedAllChange = (allChecked: boolean) => {
    let data = [...this.state.data];
    data.forEach(item => item.checked = allChecked);
    console.log(allChecked, data);

    this.setState({ data });
  }

  goPay = () => {
    const { data } = this.state;
    const checkedData = data.filter(item => item.checked);
    this.props.dispatch({ type: "cart/saveCart", payload: { data: checkedData } });
    history.push("/confirmBill");
  }

  render() {
    return (
      <div className={styles.main}>
        <List data={this.state.data} updateProduct={this.updateProduct} />
        <PayBar data={this.state.data} checkedAllChange={this.checkedAllChange} goPay={this.goPay} />
      </div>
    )
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(Cart);