var Mock = require('mockjs');
import { Request, Response } from 'express';

// 
export default {
  'GET /api/getUserDetail': {
    status: 1,
    id: '001',
    name: 'yuyi',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    email: 'dinjet@foxmail.com',
    signature: 'hello world',
    title: 'get it',
    tags: [
      {
        key: '0',
        label: 'one',
      },
      {
        key: '1',
        label: 'two',
      },
      {
        key: '2',
        label: 'three~',
      },
    ],
    country: 'Singapore',
    address: 'Singapore',
    phone: '+65 84057495',
  },
};
