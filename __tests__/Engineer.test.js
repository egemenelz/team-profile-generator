const Engineer = require('../lib/Engineer');

/**
 * Testing the engineer object with valid entry
 */
test('creates a engineer object', () => {
    const engineer = new Engineer('Egemen', 1234, 'egemen@test.com', 'egemenelz')

    expect(engineer.name).toBe('Egemen');
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toBe('egemen@test.com')
    expect(engineer.getRole()).toBe("Engineer")
})

/**
 * Testing the engineer object with random entries
 */
test('creates a random engineer object', () => {
    const engineer = new Engineer('', 1, '', '');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.any(String));
})