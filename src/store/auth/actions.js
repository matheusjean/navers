export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function loginSuccess(token) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token },
  };
}

export function removeNaver(id) {
  return {
    type: '@auth/REMOVE',
    id,
  };
}

export function signUpRequest(email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
