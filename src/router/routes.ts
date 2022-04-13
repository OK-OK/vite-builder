/*
 * @Author: JL Guan
 * @Date: 2022-04-13 09:18:32
 * @description: file description
 * @LastEditTime: 2022-04-13 14:28:16
 * @FilePath: \mine\vite-builder\src\router\routes.ts
 */

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/modules/hello'),
  },
  {
    path: '/',
    redirect: '/hello',
  },
]

export default routes
