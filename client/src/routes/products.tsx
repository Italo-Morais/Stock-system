import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { DefaultLayout } from '../layout/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
])
