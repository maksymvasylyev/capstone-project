import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.h2`
  font-size: 1.7em;
  color: var(--color-text);
`;
export const StyledNewCarLabel = styled.label`
  color: black;
  margin: 0;
`;

export const StyledNewCarSelect = styled.select`
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledNewCarInput = styled.input`
  margin-bottom: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledAddCarButton = styled.button`
  display: flex;
  position: relative;
  top: 10px;
  right: -340px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: var(--color-text);
  background: var(--color-backgroundLayout);
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

export const StyledAddCarList = styled.ul`
  list-style: none;
  padding: 0px;
  gap: 10px;
  display: grid;
  font-size: 1em;
  justify-items: center;
  grid-template-columns: 1fr;
`;

export const StyledUpdateLink = styled(Link)`
  &:hover {
    border: solid black 1px;
    padding-top: 30px;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  position: relative;
  top: 45px;
  right: -640px;
  &:hover {
    border: solid red 1px;
  }
`;

export const StyledDescriptionH2 = styled.h2`
  color: var(--color-text);
`;
