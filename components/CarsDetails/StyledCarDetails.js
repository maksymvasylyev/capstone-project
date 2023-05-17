import Link from "next/link";
import styled from "styled-components";

export const StyledDescriptionList = styled.ul`
  text-align: start;
  list-style: none;
`;

export const StyledDescriptionBackLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: start;
  position: relative;
  top: 40px;
`;
