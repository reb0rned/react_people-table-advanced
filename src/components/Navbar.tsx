import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const classHandling = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', {
    'has-background-grey-lighter': isActive,
  });

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={classHandling} to="/" end>
            Home
          </NavLink>

          <NavLink aria-current="page" className={classHandling} to="/people">
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
