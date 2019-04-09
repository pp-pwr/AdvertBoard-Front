import InputValidator from '../utils/InputValidator'

// describe('Input test set', () => {
//     let validator

//     beforeAll(() => {
//         validator = new InputValidator()
//     })

//     test('Pass correct email', () => {
//         validator.updateValidator("email", 'test@gmail.com')
//         let result = validator.getStatus()
//         validator.resetValidator()
//         expect(result).toBe(true)
//     })
    
//     test('Fail incorrect email', () => {
//         validator.updateValidator("email", 'testEmail@')
//         let result = validator.getStatus()
//         validator.resetValidator()
//         expect(result).toBe(false)
//     })
    
//     test('Pass same passwords', () => {
//         validator.updateValidator('password', 'testpassword', 'testpassword')
//         let result = validator.getStatus()
//         validator.resetValidator()
//         expect(result).toBe(true)
//     })
    
//     test('Fail different passwords', () => {
//         validator.updateValidator('password', 'testpassword_first', 'testpassword')
//         let result = validator.getStatus()
//         validator.resetValidator()
//         expect(result).toBe(false);
//     })
// })