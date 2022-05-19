const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Egemen', 1234, 'egemen@test.com', 1)

    expect(manager.name).toBe('Egemen');
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toBe('egemen@test.com')
    expect(manager.officeNumber).toBe(1)
    expect(manager.getRole()).toBe(Manager)

})

test('creates a random manager object', () => {
    const manager = new Manager(' ', 12345, ' ', 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})