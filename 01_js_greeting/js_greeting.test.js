const greeting = require('./js_greeting')

describe('Greeting', () => {
    test('Says "Good morning!"', () => {
        expect(greeting("morning")).toEqual("Good morning!");
    });

    test('Says "Good evening!"', () => {
        expect(greeting("evening")).toEqual("Good evening!");
    });

    test('Says "Good night!"', () => {
        expect(greeting("night")).toEqual("Good night!");
    });

    test('Says "ERROR"', () => {
        expect(greeting("huh")).toEqual("ERROR");
    });
});