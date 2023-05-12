import styled from "styled-components";
import Image from "next/image";

export const StyledResultDiv = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
  margin: 50px;
`;

export const StyledLikeButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  top: -75px;
  right: -230px;
`;

export const StyledImage = styled(Image)`
  border-radius: 10%;
`;
