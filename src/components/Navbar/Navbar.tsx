import React, { useState, useEffect } from "react";
import navbarItems from "./navbar.model";
import { CgGym } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const splitIndex = Math.ceil(navbarItems.length / 2);
  const leftNavItems = navbarItems.slice(0, splitIndex);
  const rightNavItems = navbarItems.slice(splitIndex);

  const navigate = useNavigate();

  const handleNavItemClick =
    (itemName: string): React.MouseEventHandler<HTMLAnchorElement> =>
    () => {
      if (itemName === "Home") {
        navigate("/");
        console.log(`home clicked`);
      }
    };

  const handleScroll = _.debounce(() => {}, 20);

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`content ${isSticky ? "sticky" : ""}`}>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className={`wrapper max-width ${isSticky ? "red-bg" : ""}`}>
          <div className={`left-nav ${isSticky ? "red-bg" : ""}`}>
            {/* navigation items on the left side */}
            {leftNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name.toLowerCase()}`}
                onClick={handleNavItemClick(item.name)}
                className={isSticky ? "red-bg" : ""}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="logo">
            <CgGym />
          </div>
          <div className={`right-nav ${isSticky ? "red-bg" : ""}`}>
            {/* navigation items on the right side */}
            {rightNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name.toLowerCase()}`}
                onClick={handleNavItemClick(item.name)}
                className={isSticky ? "red-bg" : ""}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
