import { ReactComponent as WhaleLogo} from '../../assets/whale52logo.svg'
import './footer.style.scss'

export const Footer = () => {
    return(
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='footer-box'>
                    <WhaleLogo />
                    <p className='p-footer'>Whaler52 is a school management website created to streamline school activities</p>
                    <p className='p-footer'>© 2022 Whale52. All rights reserved.</p>
                </div>
                <div className='footer-box'>
                    <h2 className='h2-footer'>Social Media</h2>
                    <p className='p-footer'>Instagram</p>
                    <p className='p-footer'>Twitter</p>
                    <p className='p-footer'>Git-Hub</p>
                </div>
                <div className='footer-box'>
                <h2 className='h2-footer'>More</h2>
                    <p className='p-footer'>About</p>
                    <p className='p-footer'>Blog</p>
                    <p className='p-footer'>Help</p>
                </div>
                <div className='footer-box'>
                    <h2 className='h2-footer'>Company</h2>
                    <p className='p-footer'>Developer</p>
                    <p className='p-footer'>Privacy</p>
                    <p className='p-footer'>Terms of service</p>
                </div>  
            </div>
        </div>
    )
}