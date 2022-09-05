import { ReactComponent as WhaleBanner} from '../../../assets/banner-whale.svg'
import { Button } from '../../button/button.component'
import './banner.style.scss'

export const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='banner-container'>
                <div className='sea'></div>
                <WhaleBanner className='banner-container'/>
                <div>
                    <div className='text-banner'>
                        <h1 className='title-banner'>Whaler school activities</h1>
                        <p className='p-banner'>A place to manage school activities to make it easier and more efficient</p>
                        <div className='btn-banner'>
                            <Button  type='button' buttonType='redirectButton'>
                              Try it now
                            </Button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}