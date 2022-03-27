import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

const ProfilePage = ({ isAdmin }) => {

    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem('RegisteredUsers'))?.admin;

    useEffect(() => {
        if (!isAdmin) {
            return navigate('/login');
        }

    }, [isAdmin, navigate]);

    return isAdmin && (
        <>
            <h1>Welcome to your profile page, {username}!</h1>
            <div className='container-flag'>
                <div className='red flag'>RED</div>
                <div className='orange flag'>ORANGE</div>
                <div className='yellow flag'>YELLOW</div>
                <div className='green flag'>GREEN</div>
                <div className='blue flag'>BLUE</div>
                <div className='purple flag'>PURPLE</div>
            </div>
        </>
    )
}

export default ProfilePage;