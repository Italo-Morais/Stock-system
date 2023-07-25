import styled from 'styled-components'

export const ProductsContainer = styled.div`
  max-width: 30rem;
  border: 0.2rem solid black;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 0.8rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 30rem;
  background-color: var(--gray-600);
  overflow: hidden;
`

export const ImgContainer = styled.div`
  max-width: 20rem;
  margin: 0.6rem;
  cursor: pointer;
  img {
    width: 100%;
    border: 1px solid black;
    padding-inline: 0.6rem;
    border-radius: 0.6rem;
  }
`
export const DetailsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  max-width: 20rem;
`
export const DetailsDescription = styled.div`
  max-width: 20rem;
  margin-top: 0.8rem;
`
