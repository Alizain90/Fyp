import React from 'react';
import '../styles/Header.css';
import { FaCog, FaUser , FaBell , FaFileAlt, FaSignOutAlt} from 'react-icons/fa';
import Clickabletext from './Clickabletext';
import Dropdown from '../components/Dropdown';
import Notification from './Notification';

const Header = () => {
  const handleReport = () => alert('Report clicked');
  const handleLogout = () => alert('Logout clicked');

  const settingsOptions = [
    { label: 'Report',icon:FaFileAlt , onClick: handleReport },
    { label: 'Logout',icon:FaSignOutAlt, onClick: handleLogout },
  ];
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="actions">
        <div className="action-item"></div>
          <Notification Icon={FaBell} text="Notifications"   />
          <Clickabletext icon={FaUser} text="Account" href="/account"/>
          <Dropdown icon={FaCog} text=""  options={settingsOptions} />
        </div>
    
      
    </header>
  );
};

export default Header;
