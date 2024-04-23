
const weights = [100, 90, 10, 5, 1, 15, 14, 150];

const splitPeopleWeights = (weights) => {
  weights.sort((a, b) => b - a);

  const groups = [[], []];
  let firstGroupSum = 0;
  let secondGroupSum = 0;

  weights.forEach((weight) => {
    firstGroupSum = groups[0].reduce((acc, current) => acc + current, 0);
    secondGroupSum = groups[1].reduce((acc, current) => acc + current, 0);

    if (firstGroupSum <= secondGroupSum) {
      groups[0].push(weight);
    } else {
      groups[1].push(weight);
    }
  });

  return {
    groups: groups,
    firstGroupSum: firstGroupSum,
    secondGroupSum: secondGroupSum,
  };
};

const result = splitPeopleWeights(weights);
console.log(result);




