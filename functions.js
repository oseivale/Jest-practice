const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Valerie'}
        user['lastName'] = 'Osei'
        return user
    },
    // This API call will return an object, we will test to see if our value matches what is returned from the API call
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error') 
}

// Check for TRUTHY and FALSEY values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsey matches anything that an if statement treats as false

module.exports = functions;