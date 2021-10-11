import React, { useCallback } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { ProductType } from '@/@types/product';
import { Toast } from 'antd-mobile';
import { connect, history } from 'umi';
import { ConnectState, ConnectProps, CartModelState } from '@/models/connect';
import { editCart } from '@/services/editCart';

interface CartAndBuyProps extends ConnectProps {
  product: ProductType;
  cart: CartModelState;
}

const CartAndBuy: React.FC<CartAndBuyProps> = ({ product, dispatch }) => {

  const addToCart = useCallback(() => {
    editCart({ id: product.id, increment: 1 }).then(res => {
      Toast.success(product.title + 'add to cart!');
    });
  }, [product]);

  const goPay = useCallback(() => {
    dispatch({
      type: 'cart/saveCart',
      payload: {
        data: [{ ...product, count: 1, checked: true, img: product.imgs[0] }],
      },
    });
    history.push('/confirmBill');
  }, [product]);


  return (
    <div className={styles.main}>
      <Link to="/cart" className={classnames(styles.cart)}>
        <span className="iconfont icon-3 font16"></span>
        <p className={styles.title}>Cart</p>
      </Link>
      <div
        className={classnames(styles.addCart, styles.btn)}
        onClick={addToCart}
      >
        Add To Cart
      </div>
      <div className={classnames(styles.buyNow, styles.btn)} onClick={goPay}>
        Checkout
      </div>
    </div>
  );
};

export default connect(({ cart }: ConnectState) => ({ cart }))(CartAndBuy);
