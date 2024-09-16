class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            delimiter = numbers[2];
            numbers = numbers.slice(4);
        }

        numbers = numbers.replace('\n', delimiter);
        const nums = numbers.split(delimiter).map(num => parseInt(num));

        const negatives = nums.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }

        return nums.reduce((sum, num) => sum + num, 0);
    }
}
