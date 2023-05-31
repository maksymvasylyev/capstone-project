import Link from "next/link";
import styled from "styled-components";

export const StyledDescriptionList = styled.ul`
  text-align: start;
  list-style: none;
  color: var(--color-text);
`;

export const StyledDescriptionBackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: start;
  position: relative;
  top: 50px;
  right: -60px;
  background-color: transparent;
`;
