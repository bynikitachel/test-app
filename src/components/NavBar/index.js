import { NavLink, Link } from 'react-router-dom';
import './index.css';


const NavBar = () => {

    return (
        <div className='navigation'>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
            <div className='container-log'>
                <div className='user-part'>
                    <Link to="/profile" className="user-link">Admin
                        <div className='avatar'></div>
                    </Link>
                </div>
                <button className='auth-button'></button>
            </div>
        </div >
    );
}

export default NavBar;