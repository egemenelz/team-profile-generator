const Employee = require('../lib/Employee');

/**
 * Testing the employee object with valid entry
 */
test('creates a employee object', () => {
    const employee = new Employee('Egemen', 1232452, 'egemen@test.com')

    expect(employee.name).toBe('Egemen');
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe('egemen@test.com')
    expect(employee.getRole()).toBe("Employee")
})


/**
 * Testing the employee object with random entry
 */
test('creates a random employee object', () => {
    const employee = new Employee(' ', 12345, ' ');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual(expect.any(String))
})