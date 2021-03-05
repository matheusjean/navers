/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';

import { loginRequest } from '../../store/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));

    // eslint-disable-next-line no-console
    console.log(email, password);
  }

  return (
    <>
      <img src={logo} alt="naveRs" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <Input name="email" type="email" placeholder="Seu e-mail" />
        </label>

        <label htmlFor="senha">
          Senha
          <Input name="password" type="password" placeholder="Sua senha" />
        </label>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
