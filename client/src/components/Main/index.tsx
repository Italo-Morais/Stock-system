import { useContext } from 'react'
import { ProductCard } from '../ProductCard'
import { FaPlus } from 'react-icons/fa'
import { LuSearch } from 'react-icons/lu'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import {
  BsChevronContainer,
  ButtonContainer,
  InputContainer,
  MainContainer,
  SearchContainer,
  SearchIcon,
} from './style'
import { Button } from '@mui/material'
import { ProductsContext } from '../../context'

export function Main() {
  const { products } = useContext(ProductsContext)
  console.log(products)

  return (
    <div>
      <SearchContainer>
        <InputContainer>
          <input type="search" placeholder="Buscar produto.." />
          <SearchIcon>
            <LuSearch />
          </SearchIcon>
        </InputContainer>
      </SearchContainer>
      <MainContainer>
        <BsChevronContainer>
          <BsChevronCompactLeft />
          <div>
            <p>0/1</p>
          </div>
          <BsChevronCompactRight />
        </BsChevronContainer>
        {products.map((cardProduct: any) => {
          return (
            <>
              <ProductCard cardProduct={cardProduct} />
            </>
          )
        })}
      </MainContainer>
      <ButtonContainer>
        <Button>
          <FaPlus />
        </Button>
      </ButtonContainer>
    </div>
  )
}
