class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            delimiter = numbers[2];
            numbers = numbers.slice(4);
        }

        numbers = numbers.replace('\n', delimiter);
        const nums = numbers.split(delimiter);
        return nums.reduce((sum, num) => sum + parseInt(num), 0);
    }
}

module.exports = StringCalculator;
