exports.getChunks = (array, numberOfItems) => {
  const sets = [];
  const chunks = array.length / numberOfItems;

  for (let i = 0, j = 0; i < chunks; i += 1, j += numberOfItems) {
    sets[i] = array.slice(j, j + numberOfItems);
  }

  return sets;
};
