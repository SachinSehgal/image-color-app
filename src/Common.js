// generate colors
export const generateColor = (data) => {
  let colorsArray = [];
  let count = 0;
  let xAxis = 0;
  let yAxis = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        count++;
        colorsArray.push({
          x: xAxis * 1,
          y: yAxis,
          w: 1,
          h: 1,
          backgroundColor: `rgb(${data[k]},${data[j]},${data[i]})`,
        });
        xAxis++;
        // logic to wrap the pixels to next line
        if (count % 256 === 0) {
          yAxis = yAxis + 1;
          xAxis = 0;
        }
      }
    }
  }
  return colorsArray;
};

// generate unique numbers
export const generateUniqueNumbers = (numberslength = 31) => {
  // variables
  const uniqueNumberSet = new Set();
  let counter = 1;

  while (uniqueNumberSet.size <= numberslength) {
    uniqueNumberSet.add(Math.floor(Math.random() * (counter * 8)));
    counter++;
  }

  return uniqueNumberSet;
};
