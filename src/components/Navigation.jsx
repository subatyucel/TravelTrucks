import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav className="bg-[#F7F7F7] px-[64px] py-[28px] flex items-center justify-between border-b border-[#F2F4F7]">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="TravelTrucks logo" />
        </NavLink>
        <ul className="flex gap-[32px] m-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "activeLink" : ""} font-medium`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${isActive ? "activeLink" : ""} font-medium`
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
