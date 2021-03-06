import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { loginSuccess, signFailure } from './actions';

export function* login({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'users/login', {
    email,
    password,
  });

  const { token } = response.data;

  if (!token) {
    toast.error('Token não foi gerado');
    return;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(loginSuccess(token));

  history.push('/dashboard');
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    yield call(api.post, 'users/signup', {
      email,
      password,
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro. Verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
