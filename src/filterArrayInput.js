const filterArrayInput = (arrayInput) => {
    const evenArray = [];
    const oddArray = [];
  
  
    if (!arrayInput) {
      return 'Please supply an input';
    }
  
    if (typeof arrayInput === 'string') {
      return 'Input must be an array';
    }
  
    if (typeof arrayInput === 'number') {
      return 'Input must be an array of numbers';
    }
  
    if (!Array.isArray(arrayInput)) {
      return 'Please pass in an array';
    }
  
    if (arrayInput.length === 0) {
      return 'Input cannot be empty';
    }
  
    for (let singleValue of arrayInput) {
      if (singleValue < 1) {
        return 'Value must be greater than 1';
      }
      if ((singleValue % 2) === 0 ) {
        evenArray.push(singleValue);
      }
      else {
        oddArray.push(singleValue);
      }
    }
    return {
      evenArray, 
      oddArray
    }
  
  };
  
  export default filterArrayInput;