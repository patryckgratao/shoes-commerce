import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md'

function Header() {
  return(
    <Container>
      <Link to="/">
        <img src={logo} alt="Shoes Commerce" />
      </Link>

    <Cart to="/cart">
      <div>
        <strong>Meu carrinho</strong>
        <span>10 itens</span>
      </div>
      <MdShoppingBasket color='#fff' size={36} />
    </Cart>

    </Container>
  )
}
export default Header;