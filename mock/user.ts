import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

function getCurrentUserInfo() { }
// The code will be compatible with local service mock and static data
export default {
  // support Object and Array
  'GET /api/currentUser': {
    status: 1,
    name: 'Shakespeare',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    userid: '001',
  },
  // GET POST can omit
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login': (req: Request, res: Response) => {
    const { password, name } = req.body;
    if (password === '123' && name === 'gaoshaoyun') {
      res.send({
        status: 1,
        name: 'Shakespeare',
        icon:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userid: '001',
      });
    } else {
      res.send({
        status: 0,
        msg: 'account or password incorrect',
      });
    }
  },
  'GET /api/logout': {
    data: { msg: 'success' },
  },

  'POST /api/login/account': (req: Request, res: Response) => {
    const { password, userName, type } = req.body;
    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === 'ant.design' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
