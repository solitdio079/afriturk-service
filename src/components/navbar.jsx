import {FaBars, FaFacebook, FaLinkedinIn} from 'react-icons/fa6'
import {Link, NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <FaBars className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/about"
                >
                  A propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/about"
                >
                  A propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            {' '}
            <img width={150} src="/logo.png" />{' '}
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FaFacebook className="w-6 h-6" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaLinkedinIn className="h-6 w-6" />
            </div>
          </button>
        </div>
      </div>
    )
}