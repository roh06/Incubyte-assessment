class StringCalculator {
    constructor() {
        this.callCount = 0;
    }

    add(numbers) {
        this.callCount++;
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        let customDelimiterMatch = numbers.match(/^\/\/(.*?)\n/);
        
        if (customDelimiterMatch) {
            let rawDelimiter = customDelimiterMatch[1];
            delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            numbers = numbers.slice(customDelimiterMatch[0].length);
        }

        let numArray = numbers.split(delimiter).map(Number);
        let negativeNumbers = numArray.filter(n => n < 0);
        
        if (negativeNumbers.length > 0) {
            throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
        }

        return numArray.reduce((sum, num) => sum + num, 0);
    }

    getCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;