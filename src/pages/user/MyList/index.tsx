import React, { useEffect } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { Card, WingBlank } from 'antd-mobile';

const grids = [
  {
    icon: 'card',
    text: 'To Pay',
    to: '/orderList',
  },
  {
    icon: 'daifahuo',
    text: 'To Ship',
    to: '/orderList',
  },

  {
    icon: 'daishouhuo',
    text: 'To Receive',
    to: '/orderList',
  },
  {
    icon: 'pingjia',
    text: 'To Review',
    to: '/orderList',
  },
];

const MyList = () => {
  return (
    <WingBlank size="lg" className={styles.main}>
      <Card full>
        <Card.Header
          title="My Orders"
          extra={<Link to="/orderList">View All Orders</Link>}
          className={classnames(styles.header, 'font12')}
        />

        <Card.Body>
          <div className={classnames(styles.grids, 'xyCenter ', 'font12')}>
            {grids.map((item, index) => (
              <Link key={'link' + index} to={item.to} className={styles.grid}>
                <i
                  className={classnames('font16 iconfont', 'icon-' + item.icon)}
                />
                <div>{item.text}</div>
              </Link>
            ))}
          </div>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default MyList;
