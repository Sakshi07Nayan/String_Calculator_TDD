const { expect } = require('chai');
const StringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('')).to.equal(0);
    });
});
