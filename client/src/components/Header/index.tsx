import { HeaderContainer } from './style'

import logoRj from '../../images/logo-rj.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoRj} alt="" />
      <h1>Stock System</h1>
    </HeaderContainer>
  )
}
