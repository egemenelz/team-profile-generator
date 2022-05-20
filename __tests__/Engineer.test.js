const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Egemen', 1234, 'egemen@test.com', 'egemenelz')

    expect(engineer.name).toBe('Egemen');
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toBe('egemen@test.com')
    expect(engineer.getRole()).toBe(Engineer)
})

test('creates a random engineer object', () => {
    const engineer = new Engineer(' ', 12345, ' ', ' ');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})