const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern("Egemen", 1, 'egemen@test.com', 'University of Miami');

    expect(intern.name).toBe('Egemen');
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toBe('egemen@test.com')
    expect(intern.school).toBe('University of Miami')
    expect(intern.getRole()).toBe("Intern")

})

test('creates a random manager object', () => {
    const intern = new Intern('', 1, '', '', '');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(expect.any(String));
})