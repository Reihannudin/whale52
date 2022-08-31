import  profileImg from '../../assets/logo.png'
import './profile.style.scss'

export const Profile = () => {
    return(
        <div className='profile-container'> 
            <div className='photo-profile'>
                <img src={profileImg} alt="PhotoProfile"/>
            </div>
            <div className='profile-about'>
                <h3 className='profile-name'>Andrian Raihannudin</h3>
                <p className='profile-email'>reedbulls91@gmail.com</p>
            </div>
            <div className='class-section'>
                <h1 className='profile-class'>11 TKJ 3</h1>
            </div>
        </div>
    )
}