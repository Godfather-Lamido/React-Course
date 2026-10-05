import NavBar from "../navbar/Navbar";
import logo from '../../../public/images/logo1.png';
import profile from '../../../public/images/profile.png';
import { ShoppingCart, Bell, ChevronDown, Search } from 'lucide-react';
import './Header.css';



export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img className="logo" src={logo} alt="Logo" />
          <h1>E-Sharp</h1>
        </div>

        <NavBar />

        <div className="nav-actions">
          <form action="" className="search-form">
            <input type="text" placeholder="Search" className="search-bar" />
            <Search size={20} />
          </form>
          <div className="icon-background">
            <ShoppingCart size={20} />
          </div>
          <div className="icon-background">
            <Bell size={20} />
          </div>
        </div>

        <div className="profile-section">
          <img className="profile-picture" src={profile} alt="Profile Picture" />
          <span className="profile-name">John Doe</span>
          <ChevronDown color="black" />
        </div>
      </header>
    </>
  );
}
