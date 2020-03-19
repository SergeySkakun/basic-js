module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }

  let selectedNames = members.filter((element) => {
    return (typeof element === 'string') && (element.length !== 0);
  }).map((elmnt) => {
    return elmnt.trim();
  });

  return selectedNames.reduce((acc, element) => {
    acc.push(element[0].toUpperCase());
    return acc;
  }, []).sort().join('');

};