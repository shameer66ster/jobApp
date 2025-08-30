import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/link";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const SmallSidebar = () => {
  const {showSidebar,toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"} >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
            <div className="nav-links">
                {links.map((link) => {
                    const { id, text, path, icon } = link;
                    return (

                        <NavLink
                            key={id}
                            to={path}
                            className='nav-link' onClick={toggleSidebar}
                        >
                            <span className="icon">{icon}</span>
                            {text}   
                        </NavLink>
                    );   
                })}






            </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
