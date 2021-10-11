var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';

function getList() {
  let res = [];
  for (let i = 0; i < Mock.Random.integer(1, 10); i++) {
    let obj = getProduct();
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


export default {
  'GET /api/getCart': {
    list: { data: getList() },
  },
};
