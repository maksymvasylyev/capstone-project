import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledResultDiv = styled.div`
  text-align: center;
  color: #8f0e0e;
  margin: 20px 20px 20px 60px;
  width: 300px;
  text-align: center;
  padding: 100px 0;
  font-size: 2rem;
  border: 1px solid white;
  box-shadow: 0 2px 20px var(--color-text);
  position: relative;
  right: 20px;
  max-width: 700px;
`;

export const StyledLikeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  position: relative;
  top: 32px;
  right: -135px;
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
  font-size: 0.9em;
  color: var(--color-text);
  position: relative;
  text-align: center;
  top: -22px;
  right: -5px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledPriceDiv = styled.div`
  font-size: 1em;
  color: var(--color-text);
  position: relative;
  text-align: center;

  top: -23px;
  right: -5px;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export const StyledCompareButton = styled.button`
  display: flex;
  position: relative;
  top: -5px;
  right: -10px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.7em;
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

export const StyledPictureDiv = styled.div`
  width: 100%;
  position: relative;
  left: 2.5px;
`;
