export interface IValidatePersonalInfo {
    validatedNameData: {
        isValid: boolean;
        message: string;
    }
    validatedEmailData: {
        isValid: boolean;
        message: string;
    }
    validatedPhonenumberData: {
        isValid: boolean;
        message: string;
    }
}

interface IValidatePersonalInfoProps {
    name: string;
    email: string;
    phoneNumber: string;
}

// TODO add tests
const validatePersonalInfo = ({name, email, phoneNumber}: IValidatePersonalInfoProps) => {
    const result: IValidatePersonalInfo = {
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
    }

    // validating name
    const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$/,'g')
    if(!nameRegex.test(name)) name.length === 0
        ? result.validatedNameData = { isValid: false, message: 'This field is required' }
        : result.validatedNameData = { isValid: false, message: 'Valid name required' }
    // validating email
    const emailRegex = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/,'g')
    if(!emailRegex.test(email)) email.length === 0
        ? result.validatedEmailData = { isValid: false, message: 'This field is required' }
        : result.validatedEmailData = { isValid: false, message: 'Valid email required' }
    // validating phone number
    const phoneRegex = new RegExp(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'g')
    if(!phoneRegex.test(phoneNumber)) phoneNumber.length === 0
        ? result.validatedPhonenumberData = { isValid: false, message: 'This field is required' }
        : result.validatedPhonenumberData = { isValid: false, message: 'Valid phone number required' }

    return result
}

export default validatePersonalInfo