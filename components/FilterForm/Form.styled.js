import styled from "styled-components";
import Image from "next/image";

export default styled.form`
  font-size: 0.7 rem;
  position: relative;
  display: flex;
  /* width: 700px; */
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 8px;
  grid-template-columns: 1fr;
  border: 3px, solid, red;
  ${({ isFormSown }) =>
    isFormSown &&
    `
      transform: translateX(0);
    `}
`;

export const StyledSubmitButton = styled.button`
  background-color: var(--color-button);
  color: var(--color-backgroundLayout);
  border-radius: 0.75rem;
  padding: 0 40px;
  margin-bottom: 10px;
  display: flex;
  top: 46px;
  left: 100px;
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 0.7em 1.5em -0.5em var(--color-text);
  &:hover {
    background-color: var(--color-backgroundLayout);
    border: none;
    color: var(--color-layout);
  }
`;

export const StyledFormDiv = styled.div`
  list-style: none;
  padding: 0px;
  display: grid;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  color: var(--color-layout);
  margin-top: 0;

  padding: 0.5em 1em;
  border-radius: 5px;
  border: solid var(--color-layout);
  box-shadow: 0 2px 8px var(--color-text);
`;

export const StyledInput = styled.input`
  color: var(--color-layout);
  /* margin-top: 0.5em; */
  padding: 0.5em;
  border-radius: 5px;
  border: solid var(--color-layout);
  box-shadow: 0 2px 8px var(--color-text);
`;

export const StyledLabel = styled.label`
  color: var(--color-text);
  font-size: 1em;
  margin-top: 0.5em;
`;

export const StyledResetButton = styled.button`
  background-color: var(--color-button);
  color: var(--color-backgroundLayout);
  width: 30px;
  text-align: center;
  border-radius: 0.75rem;
  display: flex;
  position: relative;
  right: -50px;

  text-decoration: none;
  padding: 0 53px;
  font-size: 1.2rem;
  justify-content: center;
  box-shadow: 0 0.7em 1.5em -0.5em var(--color-text);
  &:hover {
    background-color: var(--color-backgroundLayout);
    border: none;
    color: var(--color-layout);
  }
`;

export const StyledLikeImage = styled(Image)`
  background-color: transparent;
  position: relative;
  z-index: 20;
`;

export const StyledHeader = styled.h2`
  font-size: 1.2em;
  color: var(--color-layout);
  text-align: center;
  margin: 10px auto 10px auto;
`;
