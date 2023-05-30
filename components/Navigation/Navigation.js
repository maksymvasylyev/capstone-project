import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  color: #c9c9c9;
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0px;
  gap: 0.8rem;
  background-color: #252525;
  padding: 30px 10px 10px 10px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  margin-bottom: 0;
  width: 100%;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5em;
  color: ${({ active }) => (active ? "#8F0E0E" : "#C9C9C9")};
  font-weight: bold;
  font-size: 1.3em;
  background-color: #252525;
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
