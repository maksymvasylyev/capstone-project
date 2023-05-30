import styled from "styled-components";
import Image from "next/image";

export default styled.form`
  font-size: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 10px;
  grid-template-columns: 1fr;
  border: 3px, solid, red;
`;

export const StyledSubmitButton = styled.button`
  background-color: var(--color-text);
  color: var(--color-backgroundLayout);
  border-radius: 0.75rem;
  padding: 0 90px;
  margin-bottom: 10px;
  display: flex;
  top: 79px;
  left: 185px;
  position: relative;
  text-decoration: none;
  font-size: 3rem;
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
  margin-top: 0.5em;

  padding: 0.5em 1em;
  border-radius: 5px;
  border: solid var(--color-layout);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled.input`
  color: var(--color-layout);
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid var(--color-layout);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  color: var(--color-text);
`;

export const StyledResetButton = styled.button`
  background-color: var(--color-text);
  color: var(--color-backgroundLayout);
  width: 250px;
  text-align: center;
  border-radius: 0.75rem;
  display: flex;
  position: relative;
  right: -50px;

  text-decoration: none;
  padding: 0 60px;

  font-size: 3rem;

  &:hover {
    background-color: var(--color-backgroundLayout);
    border: none;
    color: var(--color-layout);
  }
`;

export const StyledLikeImage = styled(Image)`
  background-color: transparent;
`;

// <!-- HTML !-->
// <button class="button-40" role="button">Button 40</button>

// /* CSS */
// .button-40 {
//   background-color: #111827;
//   border: 1px solid transparent;
//   border-radius: .75rem;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   flex: 0 0 auto;
//   font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
//   font-size: 1.125rem;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: .75rem 1.2rem;
//   text-align: center;
//   text-decoration: none #6B7280 solid;
//   text-decoration-thickness: auto;
//   transition-duration: .2s;
//   transition-property: background-color,border-color,color,fill,stroke;
//   transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: auto;
// }

// .button-40:hover {
//   background-color: #374151;
// }

// .button-40:focus {
//   box-shadow: none;
//   outline: 2px solid transparent;
//   outline-offset: 2px;
// }

// @media (min-width: 768px) {
//   .button-40 {
//     padding: .75rem 1.5rem;
//   }
// }
