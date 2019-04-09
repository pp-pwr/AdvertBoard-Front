import InputValidator from '../utils/InputValidator'

describe('Input test set', () => {
    let validator

    beforeEach(() => {
        validator = new InputValidator()
    })

    test('Pass correct email', () => {
        let field = {
            name: "email",
            content: "test@gmail.com"
        }
        validator.updateValidator(field.name, field.content)
        expect(validator.getFieldStatus(field.name)).toBe(true)
    })
    
    test('Fail incorrect email 1', () => {
        let field = {
            name: "email",
            content: "test@"
        }
        validator.updateValidator(field.name, field.content)
        expect(validator.getFieldStatus(field.name)).toBe(false)
    })

    test('Fail incorrect email 2', () => {
        let field = {
            name: "email",
            content: "test.gmail.com"
        }
        validator.updateValidator(field.name, field.content)
        expect(validator.getFieldStatus(field.name)).toBe(false)
    })
    
    test('Fail too short email', () => {
        let field = {
            name: "email",
            content: "t@g"
        }
        validator.updateValidator(field.name, field.content)
        expect(validator.getFieldStatus(field.name)).toBe(false)
    })

    test('Pass same passwords', () => {
        let field = {
            name: "password",
            content: {
                password: "passwordtest",
                confirm_password: "passwordtest"
            }
        }
        validator.updateValidator(field.name, field.content.password, field.content.confirm_password)
        expect(validator.getFieldStatus(field.name)).toBe(true)
    })
    
    test('Fail different passwords', () => {
        let field = {
            name: "password",
            content: {
                password: "passwordtest",
                confirm_password: "passwordtest_different"
            }
        }
        validator.updateValidator(field.name, field.content.password, field.content.confirm_password)
        expect(validator.getFieldStatus(field.name)).toBe(true)
    })

    test('All correct data', () => {
        let form_data = {
            login: "testtesttest",
            email: "test@gmail.com",
            password: "passwordtest",
            confirm_password: "passwordtest"
        }
        validator.updateValidator('login', form_data.login)
        validator.updateValidator('email', form_data.email)
        validator.updateValidator('password', form_data.password)
        validator.updateValidator('password_confirm', form_data.password, form_data.confirm_password)

        expect(validator.getStatus()).toBe(true)
    })
})