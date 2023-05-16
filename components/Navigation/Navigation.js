import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  margin: 0;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;

  padding: 0 3em;
  color: ${({ active }) => (active ? "red" : "black")};
  font-weight: bold;
  font-size: 1.5em;
  &:hover {
    border-bottom: 5px solid black;
    color: red;
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
            My Garage
          </NavLink>
        </li>
      </List>
    </nav>
  );
}
