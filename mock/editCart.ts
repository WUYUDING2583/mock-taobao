var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';

export default {
  'POST /api/cart/edit': (req: Request, res: Response) => {
    const { id, count, increment } = req.body;
    res.send({
      status: 'ok',
    });
  },
};
