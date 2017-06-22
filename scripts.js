// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    var large = 0;
  
  for(var i = 0; i < (arr.length); i++){
    if(arr[i] > large){
      large = arr[i];
    }
  }
  return large;
  },
  
  reversed: function(str){  
    str = str.split("").reverse(str).join("");
  return str
  },

  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}