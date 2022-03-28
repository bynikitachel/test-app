import { NavLink, Link, useNavigate } from 'react-router-dom';
import './index.css';

const NavBar = ({ isAdmin, setIsAdmin }) => {

    const navigate = useNavigate();
    const authButtonText = isAdmin ? 'Log out' : 'Log in';

    const authButton = () => {
        if (isAdmin) {
            localStorage.setItem('isAuthAdmin', JSON.stringify(false));
            setIsAdmin(JSON.parse(localStorage.getItem('isAuthAdmin')));
        } else {
            navigate('/login');
        }
    };

    return (
        <div className='navigation'>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                {isAdmin && <li><NavLink to="/table">Table</NavLink></li>}
            </ul>
            <div className='container-log'>
                {isAdmin &&
                    <div className='user-part'>
                        <Link to="/profile" className="user-link">Admin
                            {isAdmin && <div className='avatar'/>}
                        </Link>
                    </div>
                }
                <button className='auth-button' onClick={() => authButton()}>{authButtonText}</button>
            </div>
        </div>
    );
}

export default NavBar;
