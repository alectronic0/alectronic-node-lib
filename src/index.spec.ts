import { hello } from '.';

describe('index', () => {
    describe('hello', () => {
        it('should say hello to person', () => {
            const name = 'alec';
            const expectedString = `Hello ${name}!`;

            expect(hello(name)).toEqual(expectedString);
        });
    });
});
