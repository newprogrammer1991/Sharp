export default (values, {form}) => {
    const errors = {};
    const requiredFields =
        {
            signIn: ['email', 'password'],
            signUp: ['username', 'email', 'password', 'password1'],
            createTransaction: ['sum', 'name']
        };
    requiredFields[form].forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    if (values.password && !values.password1) {
        errors.password1 = 'Please enter a password confirmation'
    }
    if (
        values.password && values.password1 &&
        values.password !== values.password1
    ) {
        errors.password1 = 'Passwords must match'
    }

    if (values.sum &&
        !/^\d+$/.test(values.sum)) {
        errors.sum = 'Invalid Amount'
    }
    return errors
}
