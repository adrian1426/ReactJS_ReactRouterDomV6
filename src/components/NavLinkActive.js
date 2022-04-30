import { NavLink } from 'react-router-dom';

const NavLinkActive = (props) => {
  const { children, to } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? 'is-active' : ''
      }}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkActive;