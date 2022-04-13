/*
 * @Author: JL Guan
 * @Date: 2022-04-13 09:18:32
 * @description: file description
 * @LastEditTime: 2022-04-13 10:33:22
 * @FilePath: \mine\vite\src\router\routes.ts
 */
const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/modules/hello')
  },
  {
    path: '/',
    redirect: '/hello'
  }
]

export default routes