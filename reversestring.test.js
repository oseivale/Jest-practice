const reverseString = require('./reversestring');

test('reverse string function exists', () => {
    expect(reverseString).toBeDefined()
})

test('reverse string hello', () => {
    expect(reverseString('hello')).toEqual('olleh')
})