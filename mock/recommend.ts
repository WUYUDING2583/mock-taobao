var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';
import { productList } from './const';

function getList() {
  let res = [];
  for (let i = 0; i < productList.length; i++) {
    let obj = getProduct(i);
    res.push({
      id: i + '',
      title: obj.title,
      img: obj.imgs[0],
      price: (Math.random() * 1000).toFixed(2),
      count: Mock.Random.integer(1, 10),
      checked: !!(i % 2),
    });
  }

  return res;
}

// 
export default {
  'GET /api/getRecommend': {
    list: { data: getList() },
  },
};
