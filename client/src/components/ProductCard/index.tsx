import {
  DetailsDescription,
  DetailsDescriptionContainer,
  ImgContainer,
  ProductsContainer,
} from './style'
import logoRj from '../../images/logo-rj.png'
import { Link } from 'react-router-dom'

export function ProductCard({ cardProduct }: any) {
  console.log(cardProduct)

  return (
    <ProductsContainer>
      <h1>
        <Link to={`product/${cardProduct.id}`}></Link>
      </h1>
      <ImgContainer>
        <img src={logoRj} alt="" />
      </ImgContainer>
      <DetailsDescriptionContainer>
        <p>{cardProduct.descriptionProduct}</p>
        <DetailsDescription>
          <p>Price: {cardProduct.priceProduct}</p>
          <p>Amount: {cardProduct.amountProduct}</p>
        </DetailsDescription>
      </DetailsDescriptionContainer>
    </ProductsContainer>
  )
}
