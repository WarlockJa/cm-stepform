import './header.scss'
import BgMobile  from '../../assets/images/bg-sidebar-mobile.svg'
import BgDesktop  from '../../assets/images/bg-sidebar-desktop.svg'
import useStepFormStore from '../../store/store'

const Header = () => {
    const { currentStep, setCurrentStep, passedSteps } = useStepFormStore(state => state)

    return (
        <header className='header'>
            <div className='header__bgWrapper'>
                <img className='header--background header--Mobile' src={BgMobile} alt="background" />
                <img className='header--background header--Desktop' src={BgDesktop} alt="background" />
            </div>
            <nav>
                <div className='header__navButtonWrapper'>
                    <button
                        id='header__navButton1'
                        className={currentStep === 1 ? 'header__navButton header__navButton--active' : 'header__navButton'}
                        onClick={() => setCurrentStep(1)}
                    >1</button>
                    <label htmlFor="header__navButton1" className='header--Desktop'>
                        <p>step 1</p>
                        <p className='header__navButtonWrapper--labelInfoP'>your info</p>
                    </label>
                </div>
                <div className='header__navButtonWrapper'>
                    <button
                        id='header__navButton2'
                        className={currentStep === 2 ? 'header__navButton header__navButton--active' : passedSteps < 2 ? 'header__navButton--disabled' : 'header__navButton'}
                        onClick={() => setCurrentStep(2)}
                        disabled={passedSteps < 2}
                    >2</button>
                    <label htmlFor="header__navButton2" className='header--Desktop'>
                        <p>step 2</p>
                        <p className='header__navButtonWrapper--labelInfoP'>select plan</p>
                    </label>
                </div>
                <div className='header__navButtonWrapper'>
                    <button
                        id='header__navButton3'
                        className={currentStep === 3 ? 'header__navButton header__navButton--active' : passedSteps < 3 ? 'header__navButton--disabled' : 'header__navButton'}
                        onClick={() => setCurrentStep(3)}
                        disabled={passedSteps < 3}
                    >3</button>
                    <label htmlFor="header__navButton3" className='header--Desktop'>
                        <p>step 3</p>
                        <p className='header__navButtonWrapper--labelInfoP'>add-ons</p>
                    </label>
                </div>
                <div className='header__navButtonWrapper'>
                    <button
                        id='header__navButton4'
                        className={currentStep === 4 || currentStep === 5 ? 'header__navButton header__navButton--active' : passedSteps < 4 ? 'header__navButton--disabled' : 'header__navButton'}
                        onClick={() => setCurrentStep(4)}
                        disabled={passedSteps < 4}
                    >4</button>
                    <label htmlFor="header__navButton4" className='header--Desktop'>
                        <p>step 4</p>
                        <p className='header__navButtonWrapper--labelInfoP'>summary</p>
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Header