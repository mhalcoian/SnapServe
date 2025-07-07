import Dashboard from './sections/dashboard'
import Stores from './sections/stores'
import Users from './sections/users'
import Vendors from './sections/vendors'
import logo from '/snapserve_logo.jpg'
import notification from '/notification.png'

function HeaderSideBarLayout(){
    return <div className="container">
        <div className="header">
    <img className="main-logo"src={logo}/>
    <img className="notification-bell"src={notification}/>
    </div>
    <div className="menu">
        <div className="menu-list">
            <div className='navigation'>
                <img className='menu-icon' src='vite.svg'/>
                <p>Dashboard</p>
            </div>
            <div className='navigation'>
                <img className='menu-icon' src='vite.svg'/>
                <p>Vendors</p>
            </div>
            <div className='navigation'>
                <img className='menu-icon' src='vite.svg'/>
                <p>Stores</p>
            </div>
            <div className='navigation'>
                <img className='menu-icon' src='vite.svg'/>
                <p>Users</p>
            </div>
            <div className='navigation'>
                <img className='menu-icon' src='vite.svg'/>
                <p>Reports</p>
            </div>
        </div>
        <button id="logout-btn">LOG OUT</button>
    </div> 
    <Vendors/>
    </div>
    
}

export default HeaderSideBarLayout