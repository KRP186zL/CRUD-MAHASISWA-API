const createNim = (lengthData) => {
  let templateNim = "210202";
  if (lengthData < 10) {
    templateNim += `000${lengthData}`;
  } else if (lengthData < 100) {
    templateNim += `00${lengthData}`;
  } else if (lengthData < 1000) {
    templateNim += `0${lengthData}`;
  }

  return templateNim;
};

module.exports = createNim;
