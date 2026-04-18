function mirrorDistance(n: number): number {
    let number = n;
    let reverseNumber = 0;
    while(n > 0){
        reverseNumber = (reverseNumber * 10) + (n % 10)
        n = Math.floor(n / 10)
    }
    return Math.abs(number - reverseNumber)
};