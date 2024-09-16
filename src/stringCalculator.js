class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;
        numbers = numbers.replace('\n', ',');
        const nums = numbers.split(',');
        return nums.reduce((sum, num) => sum + parseInt(num), 0);
    }
}

module.exports = StringCalculator;
