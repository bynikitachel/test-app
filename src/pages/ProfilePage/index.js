import './index.css';

const ProfilePage = ({ isAdmin }) => {

    return (
        <>
            <h1>Welcome to your profile page!</h1>
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