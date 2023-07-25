import styled from 'styled-components'

export const MainContainer = styled.main`
  color: white;
  max-width: 100%;
  height: calc(100vh - 267px);
  background-color: var(--gray-900);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
`

export const SearchIcon = styled.div`
  display: flex;
  position: absolute;
  left: 0.3rem;
  top: 28.5px;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border-radius: 999px;
  background-color: var(--gray-500);
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`

export const BsChevronContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;

`


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  width: 100%;
  gap: 0.8rem;
  text-decoration: none;
  position: relative;

  input {
    background-color: var(--gray-600);
    width: 100%;
    padding: 1.6rem 5.2rem;
    border-radius: 2.4rem;
    align-items: center;
    justify-content: center;
    font-family: Roboto 700;
    font-size: 1.4rem;
    border: none;
    outline: none;
    transition: 50ms;
    margin-top: 2.4rem;
    color: black;
  }

  input:hover {
    background-color: var(--gray-400);
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  button {
    border-radius: 999px;
    background-color: var(--gray-300);
    font-size: 1.4rem;
    font-family: Roboto 700;
    padding: 1rem;
    color: Black;
    width: 6rem;
    height: 6rem;
  }

  button:hover {
    transform: scale(99%);
    background-color: var(--gray-300);
    opacity: 90%;
  }
`
