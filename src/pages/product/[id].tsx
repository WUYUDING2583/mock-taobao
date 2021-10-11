import { queryProductById } from '@/services/product';
import { Component } from 'react';
import styles from './[id].less';
import { IRoute } from "umi";
import { ProductType } from '@/@types/product';
import Carousel from './Carousel';
import { Card, WhiteSpace } from 'antd-mobile';
import Tags from '@/components/Tags';
import classNames from 'classnames';
import CartAndBuy from './CartAndBuy';

class Product extends Component<IRoute, {}>{
  state: ProductType = {
    imgs: [],
    price: 0,
    title: "",
    tags: [],
    id: "",
  };

  componentDidMount() {
    //get product detail
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    queryProductById({ id })
      .then(res => {
        this.setState({ ...res.data });
      })
  }


  render() {
    const { imgs, price, title, tags } = this.state;
    return (
      <div className={styles.main}>
        <Carousel data={imgs} />
        <WhiteSpace size="lg" />
        <Card full>
          <p className={classNames("red", "bold")}>${price}</p>
          <p className={classNames("font14")}>{title}</p>
          <Tags tags={tags} />
        </Card>

        {/* <CartAndBuy {...this.state} /> */}
      </div>
    )
  }
}

export default Product;
