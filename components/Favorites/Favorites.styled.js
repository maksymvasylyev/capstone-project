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
  right: -290px;
`;

export const StyledImage = styled(Image)`
  border-radius: 10%;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledNameDiv = styled.div`
  font-size: 1.5em;
  color: black;
  position: relative;
  top: -20px;
`;

export const StyledPriceDiv = styled.div`
  font-size: 1.5em;
  color: white;
  position: relative;
  top: -25px;
`;

export const StyledCompareButton = styled.button`
  display: flex;
  position: relative;
  top: -10px;
  right: -70px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  color: white;
  background: ${({ active }) => (active ? "red" : "lightgreen")};
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em red;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
`;
