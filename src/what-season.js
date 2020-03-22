module.exports = function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if(!(date instanceof Date)) {
    throw new Error();
  }

  try {
    date.getTime();
  }
  catch(error) {
    throw error;
  }

  return ['winter', 'winter', 'spring', 
          'spring', 'spring', 'summer', 
          'summer', 'summer', 'fall', 
          'fall', 'fall', 'winter']
          [date.getMonth()];
};
