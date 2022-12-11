const monkeyItems = [];
const monkeyOperationParams = [];
const monkeyTestFactor = [];
const monkeyCondition = [];
const monkeyInspection = [];
for (let i = 0; i < 20; i++)
  monkeyInspection.push(0);


const monkeyData = inputFile.split('\n\n');

const doOperation = (operation, oldValue) => {
  const firstOperator = operation[0] === 'old' ? Number.parseInt(oldValue) : Number.parseInt(operation[0])
  const secondOperator = operation[2] === 'old' ? Number.parseInt(oldValue) : Number.parseInt(operation[2])

  if (operation[1] === '*')
    return firstOperator * secondOperator;
  if (operation[1] === '+')
    return firstOperator + secondOperator;
  if (operation[1] === '-')
    return firstOperator - secondOperator;
  if (operation[1] === '/')
    return firstOperator / secondOperator;

}

monkeyData.forEach((monkey) => {
  const monkeyspld = monkey.split("\n");

  const startingItems = monkeyspld[1].split(":")[1].split(",").map((item) => item.slice(1));
  monkeyItems.push(startingItems);

  const opParams = monkeyspld[2].split("=")[1].split(" ").slice(1);
  monkeyOperationParams.push(opParams)

  const testFactor = monkeyspld[3].split(" ").pop()
  monkeyTestFactor.push(testFactor);

  const truthCondition = monkeyspld[4].split(" ").pop()
  const falseCondition = monkeyspld[5].split(" ").pop()

  monkeyCondition.push([truthCondition, falseCondition])
})

const commonFactorDivider = monkeyTestFactor.reduce((pV = 1, c) => pV *= c)
for (let i = 0; i < 10000; i++) {
  monkeyItems.forEach((monkey, i1) => {
    while (monkey.length) {
      monkeyInspection[i1]++;
      const testFactor = Number.parseInt(monkeyTestFactor[i1]);
      const item = Number.parseInt(monkey.splice(0, 1)[0]);
      let worryLevel = Number.parseInt(doOperation(monkeyOperationParams[i1], item));
      const satisfiesCondition = (worryLevel % testFactor === 0) ? 0 : 1;
      const throwTo = Number.parseInt(monkeyCondition[i1][satisfiesCondition])
      monkeyItems[throwTo].push(worryLevel % commonFactorDivider);
    }
  })
}

monkeyInspection.sort((b, a) => a - b)

console.log(monkeyInspection[0] * monkeyInspection[1])