import { ReactNode, createContext, useState } from 'react'

export const ProductsContext = createContext([] as any)

type ProductsContextProviderProps = {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState([
    {
      id: 1,
      nameProduct: `TitleProduct`,
      descriptionProduct: `AHUSUASHUHAS`,
      priceProduct: `4,99`,
      amountProduct: `154`,
      validityProduct: `26/08`,
    },
    {
      id: 1,
      nameProduct: `TitleProduct`,
      descriptionProduct: `AHUSUASHUHAS`,
      priceProduct: `4,99`,
      amountProduct: `154`,
      validityProduct: `26/08`,
    },
    {
      id: 1,
      nameProduct: `TitleProduct`,
      descriptionProduct: `AHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHASAHUSUASHUHAS`,
      priceProduct: `4,99`,
      amountProduct: `154`,
      validityProduct: `26/08`,
    },
    {
      id: 1,
      nameProduct: `TitleProduct`,
      descriptionProduct: `AHUSUASHUHAS`,
      priceProduct: `4,99`,
      amountProduct: `154`,
      validityProduct: `26/08`,
    },
  ])

  // ...
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
