import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #212121;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 480px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      input {
        background: #fff;
        border: 1;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin: 0 0 10px;

        &::placeholder {
          color: #212121;
        }
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #212121;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#212121')};
      }
    }

    a {
      color: #212121;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
