class StringCalculator{
    constructor(){
        this.callCount = 0;
    }

    add(numbers){
        this.callCount++;

        if(!numbers) return 0;

        let delimiter = /,|\n/;

        if(numbers.startWith("//")){
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2,delimiterEnd));
            numbers = numbers.substring(delimiterEnd+1);
        }

        const tokens = numbers.split(delimiter);
        const negativeNumbers = [];
        let sum = 0;

        for(let token of tokens){
            const num = parseInt(token,10);
            if(num<0){
                negativeNumbers.push(num);
            }
            sum+=num;
        }
        if(negativeNumbers.length>0){
            throw new Error(`negatives not allowed: ${begativeNumbers.join(",")}`);
        }

        return sum;
    }

    getCalledCount() {
        return this.callCount;
    }
}
module.exports = StringCalculator;