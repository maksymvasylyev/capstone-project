import styled from "styled-components";

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
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 5%;
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  right: -100px;
  text-decoration: none;
  display: inline-block;
  font-size: 3rem;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

export const StyledFormDiv = styled.div`
  list-style: none;
  padding: 0px;
  display: grid;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled.input`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  color: blue;
`;

export const StyledResetButton = styled.button`
  width: 100%;
  background-color: white;
  border: 3px solid black;
  color: black;
  border-radius: 10%;
  padding: 5px 10vw;
  position: relative;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;
