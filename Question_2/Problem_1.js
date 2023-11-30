function SR(run, ball) {
    if (ball === 0) {
        return "Cannot calculate strike rate, no balls were faced.";
    }

    const strikeRate = (run / ball) * 100;
    return strikeRate.toFixed(2);
}

// Take input
let runsScored = 45;
let ballFaced = 30;
let StrikeRate = SR(runsScored, ballFaced);
console.log(`Strike rate is: ${StrikeRate}`);
