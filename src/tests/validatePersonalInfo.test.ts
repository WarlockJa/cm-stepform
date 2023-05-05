import validatePersonalInfo from "../Components/PersonalInfo/validatePersonalInfo";

// name tests
test('name is empty', () => {
    const name = ''
    const email = 'test@test.com'
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: false,
            message: 'This field is required'
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
})

test('name is digits', () => {
    const name = '123'
    const email = 'test@test.com'
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: false,
            message: 'Valid name required'
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
})

// email tests
test('email is empty', () => {
    const name = 'John Doe'
    const email = ''
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: false,
            message: 'This field is required'
        },
        validatedPhonenumberData: {
            isValid: true,
            message: ''
        }
    })
})

test('email has no @', () => {
    const name = 'John Doe'
    const email = 'testtest.com'
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: false,
            message: 'Valid email required'
        },
        validatedPhonenumberData: {
            isValid: true,
            message: ''
        }
    })
})

test('email has no proper domain', () => {
    const name = 'John Doe'
    const email = 'test@testcom'
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: false,
            message: 'Valid email required'
        },
        validatedPhonenumberData: {
            isValid: true,
            message: ''
        }
    })
})

// phone number tests
test('phone number is empty', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = ''
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: true,
            message: ''
        },
        validatedPhonenumberData: {
            isValid: false,
            message: 'This field is required'
        }
    })
})

test('phone starts with a plus', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = '+1234567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
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
})

test('phone contains area code in brackets', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = '+1(234)567890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
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
})

test('phone contains area code with more than four characters in brackets', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = '+1(23456)7890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: true,
            message: ''
        },
        validatedPhonenumberData: {
            isValid: false,
            message: 'Valid phone number required'
        }
    })
})

test('phone is divided with dashes', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = '1234-567-890'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
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
})

test('phone is too short', () => {
    const name = 'John Doe'
    const email = 'test@test.com'
    const phoneNumber = '+1234'
    expect(validatePersonalInfo({ name, email, phoneNumber })).toStrictEqual({
        validatedNameData: {
            isValid: true,
            message: ''
        },
        validatedEmailData: {
            isValid: true,
            message: ''
        },
        validatedPhonenumberData: {
            isValid: false,
            message: 'Valid phone number required'
        }
    })
})
