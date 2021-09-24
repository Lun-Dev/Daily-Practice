const { expect } = require('@jest/globals');
const greetingSwitch = require('./js_greeting_switch');

describe('Greeting', () => {
    test('Says "Good Morning"', () => {
        expect(greetingSwitch("morning")).toEqual("Good Morning");
    });

    test('Says "Good Evening"', () => {
        expect(greetingSwitch("evening")).toEqual("Good Evening");   
    });

    test('Says "Good Night"', () => {
        expect(greetingSwitch("night")).toEqual("Good Night");
    });

    test('Says "ERROR"', () => {
        expect(greetingSwitch("what")).toEqual("ERROR");
    });
});