module.exports = function transform(arr) {
    if(Array.isArray(arr) === false) {
        throw new Error();
    }

    const CONTROL_SEQUENCES = {
        '--discard-next': () => {
            if(indx + 1 < arr.length) {
                indx++;
            }

            return false;
        },
        '--discard-prev': (array) => { 
            if(array.length) {
                array.pop();
            }

            return false;
        },
        '--double-next': (array) => { 
            if(indx + 1 < arr.length) { 
                array.push(arr[indx + 1]); 
            }

            return false;
        },
        '--double-prev': (array) => { 
            if(indx - 1 >= 0) { 
                array.push(arr[indx - 1]); 
            }

            return false;
        },
    };

  let result = [];
  let indx = 0;
  while(indx < arr.length) {
    if(CONTROL_SEQUENCES[arr[indx]]) {
            CONTROL_SEQUENCES[arr[indx]](result);
    }
    else {
        result.push(arr[indx]);
    }

    indx++;
  }

return result;

};