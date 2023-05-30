import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0px;
  gap: 0.8rem;
  background-color: pink;
  padding: 10px;
  margin-bottom: 0;
  width: 100%;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 2em;
  color: ${({ active }) => (active ? "red" : "black")};
  font-weight: bold;
  font-size: 1.3em;
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
            MyGarage
          </NavLink>
        </li>
      </List>
    </nav>
  );
}
