const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);
  if(isNaN(number) || typeof(sampleActivity) !== 'string'
    || number <= 0 || number > 15) {
    return false;
  }
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

};