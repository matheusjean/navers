import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="navers" />
          <Link to="/">Sair</Link>
        </nav>
      </Content>
    </Container>
  );
}
