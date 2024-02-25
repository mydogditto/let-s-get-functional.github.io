// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// set the result of filter to a variable 
    let males = _.filter(array, function(customer){
        // filter is creating an array this step fills the array with all the mals
        // in the object
        return customer.gender === 'male';
    });
    // since we're dealing with an array we can use .length to count
    return males.length
    };


var femaleCount = function(array){
    // use reduce to count the number of female customers
    let result = _.reduce(array, function(accum, current){
// if the current gender = female 
 if(current.gender === "female"){
 // then incrament the accumulater 
 accum++
 }
return accum
    },0)
    return result
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
            } else {
            return accumulator;
            }
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return accumulator;
            } else {
            return current ;
            }
    
    })
    return youngest.name;
}
var averageBalance = function(array){
    let balance = _.reduce(array, function(accumulator, current){
        let totalBalance = current.balance.replace(/[$, ,]/g, "");
     let newNumbers = parseFloat(totalBalance);
    return newNumbers + accumulator;
    }, 0)
    return  balance / array.length
    };
    

var firstLetterCount = function(array, letter){
    let friendLetter = _.filter(array, function(customer){
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.name
        }
    })
    return friendLetter.length
}; 


var friendFirstLetterCount = function(array, customer, letter){
     //create a variable to store the count
 var count = 0;
 //create a variable to store the customer's friends
 var friends = array.filter(function(cust){
   return cust.name === customer;
 })[0].friends;
 //iterate through the friends array
 friends.forEach(function(friend){
   //if the first letter of the friend's name is equal to the letter
   if(friend.name[0].toUpperCase() === letter.toUpperCase()){
     //increment the count
     count++;
   }
 })
 //return the count
 return count;

}


var friendsCount = function(array, name){;
let customer = array.reduce(function(accumulator, current){
    // iterate over current.friends array to access
    for (let i = 0; i < current.friends.length; i++){
      // if the name is in the friends array, push the name into the accumulator array
      if (current.friends[i].name === name){
        accumulator.push(current.name);
      }
    }// return the accumulated array
    return accumulator;
  }, [])
  
  return customer;

}
var topThreeTags = function(array){
    let resultObj = array.reduce(function(accumulator, current){
        // create a tags array
        let tags = current.tags;
        // iterate over the tags array
        for (let i = 0; i < tags.length; i++){
          // determine if the current tag ALREADY exists in acc
          if (accumulator[tags[i]]){
            // if it exists what do i do
            accumulator[tags[i]] += 1;
            // else it doesn't
            // if it doesn't exist i need to create it and initialize it a value 
          } else {
            accumulator[tags[i]] = 1;
          }
        }
        return accumulator;
      }, {});
      let resultArr = [];
      // iterate through resultObj
      for (var key in resultObj){
        // push each key/value pair into resultArr
        resultArr.push([key, resultObj[key]]);
      }
      resultArr.sort(function(a, b){
        return b[1] - a[1];
      })
      // return array with the highest string followed by 2 follow by 3
      return [resultArr[0][0], resultArr[1][0], resultArr[2][0]]
};

var genderCount = function(array){
    let count = _.reduce(array,function(acc, current){
        if(acc[current.gender]){
          acc[current.gender]++;
        } else {
          acc[current.gender] = 1;
        } return acc;
        },{})
        return count
    };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
