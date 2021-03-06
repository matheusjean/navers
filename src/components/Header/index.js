import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="navers" />
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </nav>
      </Content>
    </Container>
  );
}
