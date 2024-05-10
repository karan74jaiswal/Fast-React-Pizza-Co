import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">FAST REACT PIZZA CO.</Link>
      <input type="search" placeholder="Search order #" />
    </header>
  );
}

export default Header;
