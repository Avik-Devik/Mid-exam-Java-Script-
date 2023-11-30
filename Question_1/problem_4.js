function RRR(RR, RO) {
    const RB = RO * 6;
    console.log(RB);

    if (RB <= 0) {
        return "Match End";
    }
    const requiredRunRate = (RR / RB) * 6;
    console.log(requiredRunRate);

    return `Required Run Rate: ${requiredRunRate.toFixed(2)}`;
}

const RR = 124;
const RO = 14;

console.log(RRR(RR, RO));