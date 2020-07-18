import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import { menuOpen, menuClose } from "../animations";

const Header = ({ width, history }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    //

    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened) {
      // animation to open menu
      menuOpen(width);
    } else {
      // animation to close menu
      menuClose();
    }
  }, [menuState.menuOpened, width]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact>
              AGENCY.
            </NavLink>
          </div>

          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>

            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
