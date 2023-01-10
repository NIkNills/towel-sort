// You should implement your task here.

module.exports = function towelSort(matrix) {
  return arguments.length > 0
    ? matrix
        .map((i, idx) => {
          if (idx % 2 !== 0) {
            return i.reverse();
          }

          return i;
        })
        .flat()
    : [];
};
