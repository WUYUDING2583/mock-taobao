var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';
import { productList } from './const';

interface getProductListProps {
  pageNo: number;
  pageSize: number;
  searchKey?: string;
  total: number;
}

function getProductList({
  pageNo = 0,
  pageSize = 10,
  total,
}: getProductListProps): {}[] {
  const getProductList = [];
  for (let i = 0; i < pageSize; i++) {
    let realIndex = pageNo * pageSize + i;
    if (realIndex > total - 1) {
      break;
    }
    let obj = getProduct(realIndex);
    getProductList.push({
      id: realIndex, //i,
      title: obj.title,
      img: obj.imgs[0],
      tags: obj.tags,
      price: (Math.random() * 1000).toFixed(2),
      link: '',
    });
  }
  return getProductList;
}

// find all matched data and get first some items
function getProductListBySearch({
  pageNo = 0,
  pageSize = 10,
  searchKey = '',
  total,
}: getProductListProps): { data: {}[]; total: number } {
  const getProductList = [];

  let i = 0; //loop all indexs
  let n = 0; //store the index which data match

  while (i < productList.length) {
    let obj = getProduct(i++);
    if (!!searchKey) {
      const refer = obj.catgory + obj.title + obj.tags.join('');
      // not match
      if (refer.indexOf(searchKey) === -1) {
        continue;
      }
    }

    getProductList.push({
      id: n,
      title: n + obj.title,
      img: obj.imgs[0],
      tags: obj.tags,
      price: (Math.random() * 1000).toFixed(2),
      link: '',
    });
  }

  return {
    total: getProductList.length,
    data: getProductList.slice(pageNo * pageSize, pageSize),
  };
}

// 
export default {
  'POST /api/search': (req: Request, res: Response) => {
    const { pageNo, pageSize, searchKey } = req.body;
    let total = productList.length;

    let listData;
    if (!!searchKey) {
      let obj = getProductListBySearch({
        pageNo,
        pageSize,
        searchKey,
        total,
      });
      listData = obj.data;
      total = obj.total;
    } else {
      listData = getProductList({
        pageNo,
        pageSize,
        total,
      });
    }

    res.send({
      status: 'ok',
      list: {
        pagination: {
          totalPage: Math.ceil(total / pageSize),
          pageNo,
          pageSize,
          searchKey,
        },
        data: listData,
      },
    });
  },
};
