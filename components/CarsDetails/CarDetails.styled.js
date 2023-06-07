import Link from "next/link";
import styled from "styled-components";

export const StyledDescriptionList = styled.ul`
  text-align: start;
  list-style: none;
  color: var(--color-text);
`;

export const StyledDescriptionBackLink = styled(Link)`
  text-decoration: none;
  position: relative;
  top: 40px;
  right: -15px;
  background-color: transparent;
`;
