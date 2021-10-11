import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.less';

const carouselImgs = [
  {
    src:
      'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
    alt: 'FEMALE CLOTHE',
  },
  {
    src:
      'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
    alt: 'MALE CLOTHE',
  },

  {
    src:
      '//gw.alicdn.com/imgextra/i2/193/O1CN011QYq3d1DIR21KZdje_!!193-0-lubanu.jpg',
    alt: 'SHOES',
  },
  {
    src:
      '//img.alicdn.com/imgextra/i1/158/O1CN012x8yNc1D2PAaNb7lG_!!158-0-luban.jpg',
    alt: 'BAG',
  },
];

export default () => {
  return (
    <Carousel className={styles.main} autoplay={true} infinite>
      {carouselImgs.map(item => (
        <a
          className={styles.carouselItem}
          key={item.src}
          href="https://m.intl.taobao.com/"
        >
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </Carousel>
  );
};
