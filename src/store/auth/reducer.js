import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@cart/REMOVE': {
        const naverIndex = draft.findIndex((naver) => naver.id === action.id);

        if (naverIndex) {
          draft.splice(naverIndex, 1);
        }
        // eslint-disable-next-line no-console
        console.log(naverIndex);
        break;
      }
      case '@auth/SIGN_UP_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
