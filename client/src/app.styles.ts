import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px @media (min-width: 400px) {
    margin: 0 10px;
  }

  @media (min-width: 800px) {
    margin: 0 25px;
  }

  @media (min-width: 1200px) {
    margin: 0 50px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Header = styled.h1`
  font-family: "Roboto", sans-serif;
`;
