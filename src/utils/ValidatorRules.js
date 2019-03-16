const validator_rules = {
    login: {
        rules: [
            {
                type: 'regex',
                test: /^[A-Za-z0-9_]+$/,
                message: 'Nazwa użytkownika może zawierać tylko liczby i litery!'
            },
            {
                type: 'function',
                test: (value) => {
                    return value.length >= 5;
                },
                message: "Nazwa użytkownika musi się składać z co najmniej 5 znaków!"
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },
    email: {
        rules: [
            {
                type: 'regex',
                test: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Podany adres email nie jest prawidłowy!"
            },
            {
                type: 'function',
                test: (value) => {
                    return value.length >= 3;
                },
                message: "Nazwa użytkownika musi się składać z co najmniej 3 znaków!"
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },
    password: {
        rules: [
            {
                type: 'function',
                test: (value) => {
                    return value.length >= 8;
                },
                message: "Hasło musi się składać z co najmniej 8 znaków!"
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },
    password_confirm: {
        rules: [
            {
                type: 'comparator',
                test: (value, other_value) => {
                    return value === other_value
                },
                message: "Hasła muszą być takie same!"
            }
        ],
        errors: [],
        valid: false,
        state: '',
    }
}

export default validator_rules