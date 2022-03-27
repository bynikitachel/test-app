import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvalidAuth from '../../components/InvalidAuth';
import './index.css';

const LoginPage = ({ setIsAdmin }) => {

    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {

        const adminLogin = { admin: 'Admin', pass: '12345678' };

        localStorage.setItem('RegisteredUsers', JSON.stringify(adminLogin));
        const regAdmin = JSON.parse(localStorage.getItem('RegisteredUsers'));
        const { admin, pass } = regAdmin;

        if (username && password && username === admin && password === pass) {

            localStorage.setItem('isAuthAdmin', JSON.stringify(true));
            setIsAdmin(JSON.parse(localStorage.getItem('isAuthAdmin')));
            setIsInvalid(false);

            navigate('/profile');

        } else {
            setIsInvalid(true);
        }
    };

    return (
        <div className='form-container'>
            <div className='inputs-container'>
                <h1>Admin</h1>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='password'
                />
                {isInvalid && <InvalidAuth />}
            </div>

            <button className='form-button' onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default LoginPage;