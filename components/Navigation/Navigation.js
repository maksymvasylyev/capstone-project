import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  padding-top: 5px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  margin: 0;
  align-items: center;
  align-content: end;
  background-color: var(--color-backgroundLayout);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1.9em;
  color: ${({ active }) => (active ? "#8f0e0e" : "#C9C9C9")};
  font-weight: bold;
  font-size: 1.3em;
  background-color: var(--color-backgroundLayout);
  color: var(--color-layout);
  &:hover {
    border-bottom: 5px solid black;
    color: #8f0e0e;
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <List role="list">
        <li>
          <NavLink
            href="/filter-form"
            active={router.pathname === "/filter-form" ? "active" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/favorites"
            active={router.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/compare"
            active={router.pathname === "/compare" ? "active" : ""}
          >
            Compare
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/myGarage"
            active={router.pathname === "/myGarage" ? "active" : ""}
          >
            MyGarage
          </NavLink>
        </li>
      </List>
    </nav>
  );
}
