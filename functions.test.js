const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Check that x is equal to x' , () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('Should be Valerie Osei object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Valerie', lastName: 'Osei'})
})

test('To be under 1600', () => {
    const load1 = 800;
    const load2 = 300;
    expect(load1 + load2).toBeLessThan(1600)
})

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('usernames contains Admin', () => {
    const usernames = ['john', 'val', 'admin']
    expect(usernames).toContain('admin')
})

// Working with async data

// Promises
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})
