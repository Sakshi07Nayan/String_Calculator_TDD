const { expect } = require('chai');
const StringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('')).to.equal(0);
    });
    it('should return the number itself when a single number is provided', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('1')).to.equal(1);
    });
    it('should return the sum of two numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('1,2')).to.equal(3);
    });
    it('should return the sum of multiple numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('1,2,3,4')).to.equal(10);
    });
    it('should handle new lines as delimiters', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('1\n2,3')).to.equal(6);
    });
    it('should support custom delimiters', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('//;\n1;2')).to.equal(3);
    });
    
});
