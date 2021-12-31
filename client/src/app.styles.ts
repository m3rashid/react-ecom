import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton"

export const Wrapper = styled.div`
  margin-top: 40px

  @media (min-width: 400px) {
      margin: 0 10px;
  }

  @media (min-width: 800px) {
      margin: 0 25px;
  }

  @media (min-width: 1200px) {
      margin: 0 50px;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;