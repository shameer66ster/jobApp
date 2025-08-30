import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft} from 'react-icons/fa'
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const Navbar = () => {
    const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
        <div className="nav-center">
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignLeft />
            </button>
            <div>
                <Logo />
                <h3 className="logo-text">dashboard</h3>
            </div>
        </div>
        <div className="btn-container">toggle/logout</div>
        </Wrapper>
  )
}

export default Navbar