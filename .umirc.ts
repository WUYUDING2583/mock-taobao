import { defineConfig } from 'umi';

export default defineConfig({
  title: "a mock mall",
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    'primary-color': 'red',
    'brand-primary': 'red',
    'brand-primary-tap': 'red',
    'border-color-base': '#ddd',
  },
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignore-', '.hairlines', 'am-', 'px-'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/\/Stores\/.*.less/, /global.css/, /node_modules/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1134,
    }),
  ],
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/home/index' },
        { path: '/login', component: '@/pages/login/index' },
        { path: '/search', component: '@/pages/search/index' },
        { path: '/product/:id', component: '@/pages/product/[id]' },
        {
          path: '/',
          component: '@/layouts/SecurityLayout',
          routes: [
            { path: '/cart', component: '@/pages/cart/index' },
            { path: '/user', component: '@/pages/user/index' },
            { path: '/orderList', component: '@/pages/orderList/index' },
            { path: '/confirmBill', component: '@/pages/confirmBill/index' },
          ]
        },
      ]
    },
  ],
  sass: {},
  fastRefresh: {},
});
