import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledResultDiv = styled.div`
  text-align: center;
  color: #8f0e0e;
  width: 700px;
  font-size: 2.5rem;
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
  box-shadow: 0 2px 20px var(--color-text);
  position: relative;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledNameDiv = styled.div`
  font-size: 1.5em;
  color: #e9e9e9;
  position: relative;
  text-align: center;
  top: -30px;
  background-color: transparent;
`;

export const StyledPriceDiv = styled.div`
  font-size: 1.5em;
  color: white;
  position: relative;
  text-align: center;
  top: -30px;
  background-color: transparent;
`;

export const StyledCompareButton = styled.button`
  display: flex;
  position: relative;
  top: -10px;
  right: -60px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: ${({ active }) => (active ? "#8F0E0E" : "#4E784F")};
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
