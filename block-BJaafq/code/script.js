function sum(numA, numB){
return numA + numB; 
}

// testing framework 
function test(message, callback){
    try{
        callback();
        console.log(`DONE!`,message)
    }catch(error){
        console.error(error);
        console.error(message)
    }
  }
  
  // assertion library
  function expect(actual) {
      return {
          toEqual: function(expected){
              if(actual !== expected){
                  throw new Error(`${result} is not equal to ${expected}`);
              }
          },
          toBeEqual: function (expected) {
              if(typeof result !== expected){
                  throw new Error(`${result} is not of string type`)
              }
          },
          to
      };
  }