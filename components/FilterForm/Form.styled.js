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
  border-radius: 50%;
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
