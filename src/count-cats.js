module.exports = function countCats(matrix) {
  return matrix.reduce((acc, element, index) => {
    return acc + element.filter( elm => elm === "^^" ).length;
  }, 0)
};
