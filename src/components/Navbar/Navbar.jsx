import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-wrapper">
        <div className="left-navbar">
          <div className="logo">ⒶⒹⓂⒾⓃ</div>
        </div>
        <div className="right-navbar">
          <div className="navbar-Icon-Container">
            <NotificationsNone />
            <span className="notification-badge">2</span>
          </div>
          <div className="navbar-Icon-Container">
            <Language />
            <span className="notification-badge">1</span>
          </div>
          <div className="navbar-Icon-Container">
            <Settings />
          </div>
          <div className="navbar-Icon-Container">
            <div className="profile-img">
              <img
                src="https://th.bing.com/th/id/OIP.kf3rbDAdmf-urpG-Z05n-gHaH8?w=175&h=187&c=7&r=0&o=5&dpr=1.75&pid=1.7"
                alt=""
              />
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Navbar;
