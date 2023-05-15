import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledResultDiv = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
  margin: 50px;
`;

export const StyledLikeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  position: relative;
  top: 45px;
  right: -175px;
`;

export const StyledImage = styled(Image)`
  border-radius: 10%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledNameDiv = styled.div`
  font-size: 1.2em;
  color: black;
  position: relative;
  top: -30px;
`;

export const StyledPriceDiv = styled.div`
  font-size: 1.5em;
  color: white;
  position: relative;
  top: -30px;
`;
