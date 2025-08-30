import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { createContext, useState, useContext } from "react";

const DashboardContext = createContext(); 

const DashboardLayout = () => {
  const user = {name: 'shamz'} 
  const [showSidebar, setShowSidebar] = useState(true); 
  const [isdarkTheme, setIsdarkTheme] = useState(false); 
  const toggleDarkTheme = () => {
    console.log('toggle theme');
  } // to be replaced with actual function from context
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  } // to be replaced with actual function from context
  const logoutUser = () => {
    console.log('logout user');
  } // to be replaced with actual function from context
  return (
    <DashboardContext.Provider value={{user, isdarkTheme, toggleDarkTheme, showSidebar, toggleSidebar, logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
