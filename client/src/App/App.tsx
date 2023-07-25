import { RouterProvider } from 'react-router-dom'
import { router } from '../routes/products'
import { ProductsContextProvider } from '../context'

export function App() {
  return (
    <>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </>
  )
}
