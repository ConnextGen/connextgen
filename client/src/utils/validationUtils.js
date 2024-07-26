export function validateEmail(values, errors, email) {
    // email required and matches typical email format _@_._
    if (!values[email]) {
        errors[email] = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[email])
    ) {
        errors[email] = 'Invalid email address';
    }
}

export function validatePassword(values, errors, password) {
    // password required and minlength of 8
    if (!values[password]) {
        errors[password] = 'Required';
    } else if (values[password].length < 8) {
        errors[password] = 'Password must be at least 8 characters long';
    }
}

export function requireField(values, errors, field) {
    if (!values[field]) {
        errors[field] = "Required";
    }
}