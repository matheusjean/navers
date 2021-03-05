import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1100px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #212121;
    }
  }
`;
