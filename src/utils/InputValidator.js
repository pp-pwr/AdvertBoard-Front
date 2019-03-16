import validator_rules from './ValidatorRules'
import React from "react"

class InputValidator {
    constructor() {
        this.validator = validator_rules

        this.resetValidator()

        this.displayValidatorErrors = this.displayValidatorErrors.bind(this);
        this.updateValidator = this.updateValidator.bind(this);
        this.resetValidator = this.resetValidator.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }

    updateValidator(fieldName, value, compared_value=null) {
        this.validator[fieldName].errors = []
        this.validator[fieldName].state = value
        this.validator[fieldName].valid = true
        this.validator[fieldName].rules.forEach((rule) => {
            if(rule.type === 'regex' && rule.test instanceof RegExp) {
                if(!rule.test.test(value)) {
                    this.validator[fieldName].errors.push(rule.message)
                    this.validator[fieldName].valid = false
                }
            } else if (rule.type === 'function' && typeof rule.test === 'function') {
                if(!rule.test(value)) {
                    this.validator[fieldName].errors.push(rule.message)
                    this.validator[fieldName].valid = false
                }
            } else if (rule.type === 'comparator' && typeof rule.test === 'function') {
                if(compared_value != null && !rule.test(value, compared_value)) {
                    this.validator[fieldName].errors.push(rule.message)
                    this.validator[fieldName].valid = false
                }
            }
        })
    }

    resetValidator() {
        Object.keys(this.validator).forEach((fieldName) => {
            this.validator[fieldName].errors = []
            this.validator[fieldName].state = ''
            this.validator[fieldName].valid = false
        })
    }

    displayValidatorErrors(fieldName) {
        const field_validator = this.validator[fieldName]
        const result = ''
        if (field_validator && !field_validator.valid) {
            const errors = field_validator.errors.map((info, index) => {
                return <span className="error" key={ index }>* { info }<br /></span>
            })

            return ( <div className="col s12 row">{ errors }</div>)
        }
        return result
    }

    getStatus() {
        let status = false
        if(this.validator != null){
            status = true
            Object.keys(this.validator).forEach((field) => {
                if(!this.validator[field].valid) {
                    status = false
                }
            })
        }
        return status
    }
}

export default InputValidator