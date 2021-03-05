import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 280px;
      height: 280px;
      left: 32px;
      top: 205px;
    }

    > strong {
      font-size: 21px;
      line-height: 20px;
      font-weight: bold;
      margin-top: 5px;
    }

    > span {
      font-size: 16px;
      color: #333;
      margin: 5px 0 20px;
      font-weight: bold;
    }

    button {
      margin-top: 5px;
      border: 5px;
      height: 25px;
      width: 25px;
    }
  }
`;
