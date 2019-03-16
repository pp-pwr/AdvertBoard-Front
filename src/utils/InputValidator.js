import React from "react"

const validator = {
    login: {
        rules: [
            {
                test: /^[A-Za-z0-9_]+$/,
                message: 'Nazwa użytkownika może zawierać tylko liczby i litery!'
            },
            {
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
                test: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Podany adres email nie jest prawidłowy!"
            },
            {
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
                test: (value) => {
                    return value.length >= 8;
                },
                message: "Hasło musi się składać z co najmniej 8 znaków!"
            },
        ],
        errors: [],
        valid: false,
        state: '',
    }
}

export default validator