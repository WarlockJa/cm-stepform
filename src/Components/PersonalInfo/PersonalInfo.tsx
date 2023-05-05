import './personalinfo.scss'
import useStepFormStore from '../../store/store'
import { useState } from 'react'
import validatePersonalInfo, { IValidatePersonalInfo } from './validatePersonalInfo'

const PersonalInfo = () => {
    const { name, email, phoneNumber, setCurrentStep, setPassedSteps, setName, setEmail, setPhoneNumber } = useStepFormStore((state) => state)

    // validation states
    const [isDataValid, setIsDataValid] = useState<IValidatePersonalInfo>({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: true,
            message: ''
        },
        validatedPhonenumberData: {
            isValid: true,
            message: ''
        }
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setPassedSteps(2)
        setCurrentStep(2)
    }

    return (
        <form className='personalInfo stepForm' onSubmit={(e) => handleSubmit(e)}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number</p>
            <div className='stepForm__contentWrapper'>
                <div className='contentWrapper__inputBlock'>
                    <label htmlFor="personalInfo__name">Name<span className='contentWrapper__inputBlock--errorMessage'>{isDataValid.validatedNameData.message}</span></label>
                    <input
                        id='personalInfo__name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='e.g. Stephen King'
                        pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$"
                        maxLength={50}
                        title='Your name e.g. Stephen King'
                        className={isDataValid.validatedNameData.isValid ? '' : 'invalidInput'}
                        autoFocus
                        required
                    />
                </div>
                <div className='contentWrapper__inputBlock'>
                    <label htmlFor="personalInfo__email">Email Address<span className='contentWrapper__inputBlock--errorMessage'>{isDataValid.validatedEmailData.message}</span></label>
                    <input
                        id='personalInfo__email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='e.g. stephenking@lorem.com'
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        maxLength={50}
                        title='e.g. stephenking@lorem.com'
                        className={isDataValid.validatedEmailData.isValid ? '' : 'invalidInput'}
                        required
                    />
                </div>
                <div className='contentWrapper__inputBlock'>
                    <label htmlFor="personalInfo__phoneNumber">Phone Number<span className='contentWrapper__inputBlock--errorMessage'>{isDataValid.validatedPhonenumberData.message}</span></label>
                    <input
                        id='personalInfo__phoneNumber'
                        type="text"
                        pattern='^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='e.g. +1 234 567 890'
                        maxLength={20}
                        title='e.g. +1 234 567 890'
                        className={isDataValid.validatedPhonenumberData.isValid ? '' : 'invalidInput'}
                        required
                    />
                </div>
            </div>
            <div className='stepForm__submitWrapper'>
                <div></div>
                <button onClick={() => setIsDataValid(validatePersonalInfo({ name, email, phoneNumber }))} className='stepForm__submitButton'>Next Step</button>
            </div>
        </form>
    )
}

export default PersonalInfo