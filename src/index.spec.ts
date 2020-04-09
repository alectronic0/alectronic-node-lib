import { hello } from '.';

describe('index', () => {
    describe('hello', () => {
        it('should say hello to person', () => {
            const name = 'alec';
            const expectedString = `Hello bob!`;

            expect(hello(name)).toEqual(expectedString);
        });
    });
});
