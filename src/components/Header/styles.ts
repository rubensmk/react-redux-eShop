import styled from 'styled-components';

export const Container = styled.header`
  background: #ffffff;
  height: 90px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 60%;
  gap: 25px;
  strong {
    font-size: 20px;
    font-weight: 600;
    color: #383c6b;
    transition: filter 0.2s;
    &:hover {
      text-decoration: underline;
      filter: brightness(1.1);
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 64px;
    width: 64px;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #383c6b;
    margin-left: 5px;
  }
`;
